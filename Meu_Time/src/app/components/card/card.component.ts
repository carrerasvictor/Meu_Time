import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersModel } from 'src/app/models/players.model';
import { FootballService } from 'src/app/services/Football.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
players : any;
erro: any;

constructor(private footballService: FootballService, private route: Router){ }

ngOnInit(): void {
  this.getter();
}
  getter() {
    this.footballService.getPlayers(this.players).subscribe((res) => {
      this.players = res;
      console.log(this.players)
    }
    )
  }



}


