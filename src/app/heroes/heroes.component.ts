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

  // heroes = HEROES;
  heroes: Hero[]; // 後々HEROESを格納するためのプロパティとして定義

  selectedHero: Hero; // 選択されたHeroを格納するため

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    // 上で新たに定義したheroesに、hero.service.tsのgetHeroesでHEROESを取得

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
