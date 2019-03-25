import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // heroをインポート
import { HeroService } from '../hero.service'; // HeroServiceをインポート

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // heroes配列を定義

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroesメソッドを定義
  // HeroServiceのgetHeroesメソッドでHeroesを取得し、1~5人目をheroesに格納
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
