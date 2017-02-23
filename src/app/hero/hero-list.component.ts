import {Component, OnInit} from '@angular/core';
import {Hero} from './hero.interface';
import {HeroesService} from './heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroesService]
})
export class HeroListComponent implements OnInit {

  selectedHero: Hero;
  heroes;

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
