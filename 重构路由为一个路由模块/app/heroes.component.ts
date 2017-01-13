import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  /*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/
  /*在修改了HeroService之后，我们还要把this.heroes替换为一个承诺，
  而不再是一个英雄数组。我们得修改这个实现，把它变成基于承诺的，并在
  承诺的事情被解决时再行动。 一旦承诺的事情被成功解决，我们就会显示英
  雄数据。我们把回调函数作为参数传给承诺对象的then方法*/
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
