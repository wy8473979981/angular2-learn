import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Hero } from './hero';


@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }
    /*getHeroes(): Hero[] {
        return HEROES;
    }*/
    /*把HeroService的getHeroes方法改写为返回承诺的形式*/
    /*getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }*/
    /*我们返回一个承诺 (Promise)，它用模拟版的英雄列表进行解析。 
    它当时可能看起来显得有点过于复杂，不过我们预料到总有这么一天
    会通过 HTTP 客户端来获取英雄数据， 而且我们知道，那一定是一个
    异步操作。这一天到来了！我们把getHeroes()换成用 HTTP*/
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }




}
