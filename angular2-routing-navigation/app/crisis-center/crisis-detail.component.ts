import {Component, OnInit} from 'angular2/core'
import {Crisis, CrisisService} from './crisis.service'
import {RouteParams, Router} from 'angular2/router'
import {CanDeactivate, ComponentInstruction} from 'angular2/router'
import {DialogService} from '../dialog.service'

@Component({
	template: `
		<div *ngIf="crisis">
			<h3>"{{editName}}"</h3>	
			<div>
				<label>Id: </label>{{crisis.id}}
			</div>
			<div>
				<label>Name: </label>
				<input [(ngModel)]="editName" placeholder="name"/>
			</div>
			<button (click)="save()">Save</button>
			<button (click)="cancel()">Cancel</button>
		</div>
	`,
	styles: ['input {width: 20em}']
})

export class CrisisDetailComponent implements OnInit, CanDeactivate {
	crisis: Crisis;
	editName: string;

	constructor(
		private _service: CrisisService,
		private _router: Router,
		private _routeParams: RouteParams,
		private _dialog: DialogService
	){}

	cancel() {
		this.editName = this.crisis.name;
		this.gotoCrises();
	}

	save() {
		this.crisis.name = this.editName;
		this.gotoCrises();
	}

	ngOnInit () {
		let id = this._routeParams.get('id');
		this._service.getCrisis(id).then(crisis => {
			if (crisis) {
				this.editName = crisis.name;
				this.crisis = crisis;
			} else {
				this.gotoCrises();
			}
		});
	}

	routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
		if(!this.crisis || this.crisis.name === this.editName) {
			return true;
		}

		return this._dialog.confirm('Discard changes?');
	}

	gotoCrises() {
		let crisisId = this.crisis ? this.crisis.id : null;
		this._router.navigate(['CrisisCenter', { id: crisisId}]);
	}
}