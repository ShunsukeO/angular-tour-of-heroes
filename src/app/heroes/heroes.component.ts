import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Heroクラスをインポート
// import { HEROES } from '../mock-heroes'; // mock-heroes.tsで定義した配列HEROESをインポート
import { HeroService } from '../hero.service'; // HEROESのインポートの代わりにHeroServiceでHEROESを取得する

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]; // 後々HEROESを格納するためのプロパティとして定義

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
