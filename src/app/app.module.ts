import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinComponent } from './spin/spin.component';
import { StatusGameComponent } from './status-game/status-game.component';
import { MoneyManagerComponent } from './money-manager/money-manager.component';
import { MachineCreditsComponent } from './machine-credits/machine-credits.component';

const routes: Route[] = [
  { path: '', component: GameComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SpinComponent,
    StatusGameComponent,
    MoneyManagerComponent,
    MachineCreditsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
