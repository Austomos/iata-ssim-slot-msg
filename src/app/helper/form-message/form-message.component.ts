import { Component } from '@angular/core';
import { FormGcrMessageComponent } from './form-gcr-message/form-gcr-message.component';

@Component({
	selector: 'app-form-message',
	standalone: true,
	imports: [FormGcrMessageComponent],
	templateUrl: './form-message.component.html',
	styleUrl: './form-message.component.scss',
})
export class FormMessageComponent {}
