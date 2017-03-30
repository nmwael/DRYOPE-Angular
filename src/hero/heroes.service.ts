import {Injectable} from '@angular/core';
import {Hero} from './hero.interface';

@Injectable()
export class HeroesService {

  HEROES: Hero[] = [
    {id: 11, name: 'Larry Scott', years: [1966], image: 'https://www.bodybuilding.com/bodybuilders/scott12.jpg'}, {
      id: 12,
      name: 'Sergio Oliva',
      years: [1967, 1968, 1969],
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Sergio-Oliva.jpg/160px-Sergio-Oliva.jpg'
    }, {
      id: 13,
      name: 'Arnold Schwarzenegger',
      years: [1970, 1971, 1972, 1973, 1974, 1975],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/150px-Arnold_Schwarzenegger_1974.jpg'
    },
  ];

  constructor() {
  }

  getHeroes() {
    return this.HEROES;
  }

}
