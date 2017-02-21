import {Component, NgModule} from '@angular/core';
import {NgbAlert, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [NgbModule.forRoot()],
  declarations: [AppComponent ],
  bootstrap: [AppComponent]
})

export class AppComponent {
  title = 'app works!';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
export class Hero {
  id: number;
  name: string;
  years: number[];
  image: string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Larry Scott', years: [1966], image: 'https://www.bodybuilding.com/bodybuilders/scott12.jpg' }, { id: 12, name: 'Sergio Oliva', years: [1967, 1968, 1969], image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Sergio-Oliva.jpg/160px-Sergio-Oliva.jpg' }, { id: 12, name: 'Arnold Schwarzenegger', years: [1970, 1971, 1972, 1973, 1974, 1975], image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/150px-Arnold_Schwarzenegger_1974.jpg' },
];







