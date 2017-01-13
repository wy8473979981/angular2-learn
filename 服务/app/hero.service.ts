import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    /*getHeroes(): Hero[] {
        return HEROES;
    }*/
    /*把HeroService的getHeroes方法改写为返回承诺的形式*/
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

}
