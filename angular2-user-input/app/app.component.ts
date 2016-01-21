import {Component} from 'angular2/core';

import {ClickMeComponent} from './click-me.component'
import {KeyUpComponent_v1} from './keyup.component'
import {LoopbackComponent} from './loop-back.component'

import {KeyUpComponent_v2} from './keyup_v2.component'
import {KeyUpComponent_v3} from './keyup_v3.component'
import {KeyUpComponent_v4} from './keyup_v4.component'
import {LittleTourComponent} from './little-tour.component'

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	directives: [ClickMeComponent, KeyUpComponent_v1, LoopbackComponent, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4, LittleTourComponent]
})

export class AppComponnet { }