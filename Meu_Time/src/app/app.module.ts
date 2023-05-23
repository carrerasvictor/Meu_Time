import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { CountryComponent } from './pages/country/country.component';
import { FormationComponent } from './components/formation/formation.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { TableComponent } from './components/table/table.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CountryComponent,
    FormationComponent,
    LeaguesComponent,
    TableComponent,
    GraphicComponent,
    HomeComponent,
    CardComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
