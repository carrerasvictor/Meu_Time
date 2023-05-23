import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';
import { Observable, map, tap } from 'rxjs';
import { Login } from '../models/login.model';
import { PlayersModel } from '../models/players.model';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class FootballService {
  getLeagues() {
    throw new Error('Method not implemented.');
  }
  private apiKey: string = '3a5973db1bmshf8a65eec77a065bp11869bjsn906ce2220fdf';
  private host: string = 'api-football-v1.p.rapidapi.com';
  private url: string = 'https://api-football-v1.p.rapidapi.com/v3/';

  constructor(private httpClient: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.host
    });
  }

  public async makeRequest(endpoint: string): Promise<any> {
    try {
      const url = this.url + endpoint;
      const headers = this.getHeaders();
      const response = await this.httpClient.get(url, { headers }).toPromise();
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  public getPlayers(players : string): Observable<PlayersModel> {
    const _url = `${environment.SERVER_URL}/${players}`;

    return this.httpClient.get<PlayersModel>(_url);
  }

  public getToken(): Observable<Login> {
    return this.httpClient.get<Login>(environment.SERVER_URL);
  }

  get apiListAllPlayers(): Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPlayers: any) => {
          this.apiGetPlayers(resPlayers.url).subscribe(
            (res: any) => (resPlayers.status = res)
          );
        });
      })
    );
  }

  public apiGetPlayers(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(map((res) => res));
  }
}
