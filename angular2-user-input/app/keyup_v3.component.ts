import {Component} from 'angular2/core'

@Component({
	selector: 'key-up3',
	template: `
		<input #box (keyup.enter)="values=box.value">
		<p>{{values}}</p>
	`
})

export class KeyUpComponent_v3 {
	values = '';
}