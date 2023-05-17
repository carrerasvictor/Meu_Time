import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { CountryComponent } from './pages/country/country.component';
import { TeamComponent } from './pages/team/team.component';
import { LeagueComponent } from './pages/league/league.component';
import { FormationComponent } from './pages/formation/formation.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { TableComponent } from './components/table/table.component';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CountryComponent,
    TeamComponent,
    LeagueComponent,
    FormationComponent,
    LeaguesComponent,
    TableComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
