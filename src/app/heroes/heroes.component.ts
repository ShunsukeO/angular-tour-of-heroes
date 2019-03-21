import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Heroクラスをインポート
import { HEROES } from '../mock-heroes'; // mock-heroes.tsで定義した配列HEROESをインポート


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero; // 選択されたHeroを格納するため

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
