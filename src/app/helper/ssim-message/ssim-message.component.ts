import { Component } from '@angular/core';

@Component({
	selector: 'app-ssim-message',
	standalone: true,
	imports: [],
	templateUrl: './ssim-message.component.html',
	styleUrl: './ssim-message.component.scss',
})
export class SsimMessageComponent {
	ssimMessageText: string = '';
}
