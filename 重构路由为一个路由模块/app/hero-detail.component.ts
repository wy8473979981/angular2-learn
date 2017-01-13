// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Hero } from './hero';

import { HeroService } from './hero.service';

/*我们不会再从父组件的属性绑定中接收英雄数据。 新的HeroDetailComponent应该从
ActivatedRoute服务的可观察对象params中取得id参数， 并通过HeroService服务获取
具有这个指定id的英雄数据。*/

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  /*然后注入ActivatedRoute和HeroService服务到构造函数中，将它们的值保存到私有变量中;
  构造函数中是3个注入*/
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }


}
