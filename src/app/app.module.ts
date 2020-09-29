import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinComponent } from './spin/spin.component';
import { StatusGameComponent } from './status-game/status-game.component';
import { MoneyManagerComponent } from './money-manager/money-manager.component';

const routes: Route[] = [
  { path: '', component: GameComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SpinComponent,
    StatusGameComponent,
    MoneyManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
