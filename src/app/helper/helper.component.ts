import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMessageComponent } from './form-message/form-message.component';
import { SsimMessageComponent } from './ssim-message/ssim-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-helper',
	standalone: true,
	imports: [
		CommonModule,
		FormMessageComponent,
		SsimMessageComponent,
		FontAwesomeModule,
	],
	templateUrl: './helper.component.html',
	styleUrl: './helper.component.scss',
})
export class HelperComponent {
	faRotate = faRotate;

	isConvertFormToSSIM: boolean = true;

	onClickChangeHelper(): void {
		this.isConvertFormToSSIM = !this.isConvertFormToSSIM;
	}
}
