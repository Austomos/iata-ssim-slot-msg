import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormGcrMessageComponent } from './form-gcr-message/form-gcr-message.component';

@Component({
  selector: 'app-form-message',
  standalone: true,
  imports: [MatTabsModule, FormGcrMessageComponent],
  templateUrl: './form-message.component.html',
  styleUrl: './form-message.component.scss'
})
export class FormMessageComponent {

}
