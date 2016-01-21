import {Component} from 'angular2/core'

@Component({
	selector: 'little-tour',
	template: `
		<input #newHero
			(keyup.enter)="addHero(newHero.value)"
			(blur)="addHero(newHero.value); newHero.value=''">

		<button (click)="addHero(newHero.value)">add</button>
		<ul><li *ngFor="#hero of heroes">{{hero}}</li></ul>
	`
})

export class LittleTourComponent{
	heroes = [];
	addHero(newHero:string) {
		if (newHero){
			this.heroes.push(newHero);
		}
	}
}