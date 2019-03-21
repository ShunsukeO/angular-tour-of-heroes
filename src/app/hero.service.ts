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

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> { // 非同期処理のためにObservable
    this.messageService.add('HeroService: fetched heroes'); // heroesを取得した時メッセージを送信
    return of(HEROES);
  }
}
