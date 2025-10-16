import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { WhyChooseData } from '../../../data/why-choose.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CustomSpinnerComponent, NgFor],
  templateUrl: './why-choose.component.html',
  styles: ``,
})
export class WhyChooseComponent {
  whyChooseData: WhyChooseData = {
    sectionTitle: 'Explore Premier Care Billing Service Plans and Cost',
    sectionImage: 'assets/img/section-img.png',
    sectionDescription:
      'Our company (Premier Care Billing LLC) has considerable experience providing medical billing and other medical liaison services to over a hundred medical practices in 22 states. Don’t worry. Your practice is in safe hands! Our expert management team has over fifty years of collective experience and is expert in managing the revenue cycle of healthcare practices from different disciplines.',
    chooseLeft: {
      title: 'Professional Medical Billing Services For All Specialities',
      content:
        'This is where Premier Care Billing stands out from other competitors in the market. Our professional medical billing services and other services cover all medical specialties. Our experts have been doing these for so long that everything from billing codes to transcription has become their second nature now.',
      listItems: [
        'Cardiology',
        'Dermatology',
        'Gastroenterology',
        'Nephrology',
        'Neurology',
        'Orthopedic',
      ],
    },
    chooseRight: {
      videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', // Example URL for an informative or promotional video
    },
  };
}
