import { Component, OnInit, Input } from '@angular/core'; // Inputのインポートを追記
import { Hero } from '../hero'; // Heroクラスをインポート

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero; // Inputデコレータを付けたheroプロパティを定義

  constructor() { }

  ngOnInit() {
  }

}
