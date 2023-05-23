import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/Football.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
  public getAllPlayers: any;
  private setAllPlayers: any;
  public apiError: boolean = false

  constructor(private footballService: FootballService){}

  ngOnInit(): void {
    this.footballService.apiListAllPlayers.subscribe((res) => {
      this.setAllPlayers = res.results
      this.getAllPlayers = this.setAllPlayers;
    }, error => {
        this.apiError = true
    });
  }

  public getSearch(value: string){
    const filter = this.setAllPlayers.filter((res:any) =>{
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPlayers = filter;
  }
}
