import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/Football.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  leagues: any;

  constructor(private footballApiService: FootballService) { }

  ngOnInit(): void {
    this.footballApiService.getLeagues().then((response: any) => {
      this.leagues = response?.data ?? [];
    }).catch((error: any) => {
      console.error(error);
    });
  }
}
