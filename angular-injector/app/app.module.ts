import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroService } from '../heroes/hero.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,
    HeroesComponent],
  providers: [
    HeroService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
