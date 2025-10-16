import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { CallToActionData } from '../../../data/call-to-action.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CustomSpinnerComponent,RouterLink],
  templateUrl: './call-to-action.component.html',
  styles: ``,
})
export class CallToActionComponent {
  callToActionData: CallToActionData = {
    phoneNumber: '1234 56789',
    description:
      'Subscribe to our newsletter and get the latest healthcare content right in your inbox',
    contactLink: '/contact', // Update with actual contact page or form link
    learnMoreLink: '/contact', // Update with a link to additional information
  };
}
