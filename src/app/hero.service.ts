import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService} from './message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { } // MessageServiceを注入

  getHeroes(): Observable<Hero[]> { // 非同期処理のためにObservable
    this.messageService.add('HeroService: fetched heroes'); // heroesを取得した時メッセージを送信
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched Hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
