import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-ssim-message',
	standalone: true,
	imports: [MatInputModule],
	templateUrl: './ssim-message.component.html',
	styleUrl: './ssim-message.component.scss',
})
export class SsimMessageComponent {
	ssimMessageText: string = '';
}
