import { Component } from '@angular/core';
import { AirportInputComponent } from '../generic/airport-input/airport-input.component';

@Component({
	selector: 'app-form-gcr-message',
	standalone: true,
	imports: [AirportInputComponent],
	templateUrl: './form-gcr-message.component.html',
	styleUrl: './form-gcr-message.component.scss',
})
export class FormGcrMessageComponent {}
