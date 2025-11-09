import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import { Service } from '../../data/our-services.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CustomSpinnerComponent, NgFor],
  templateUrl: './service.component.html',
  styles: ``,
})
export class ServiceComponent {
  services: Service[] = [
    {
      icon: 'icofont-prescription',
      title: 'Medical Billing Services',
      description:
        'Premier Care Billing provides professional medical billing and management services to small and medium-sized practices. We ensure diligent preparation of bills and payment claims that you can count on.',
    },
    {
      icon: 'icofont-prescription',
      title: 'Medical Coding Services',
      description:
        'Providing professional billing services means we put coding as the foundation for the whole billing process. Premier Care Billing employs certified medical coders to ensure your healthcare practice receives the best outcomes.',
    },
    {
      icon: 'icofont-prescription',
      title: 'Medical Credentialing Services',
      description:
        'Often, in healthcare setups, physician credentialing can become a bit of a hassle, which is why our physician credentialing and re-credentialing services promise to avoid any delays and prevent loss of revenue.',
    },
    {
      icon: 'icofont-prescription',
      title: 'Front Office Management',
      description:
        'Premier Care Billing’s remarkable front-end management services offer flawless data collection at the front desk by checking the patient insurance eligibility and scheduling regular follow-ups to eliminate patients’ no-shows.',
    },
    {
      icon: 'icofont-prescription',
      title: 'Medical Transcription Services',
      description:
        'Premier Care Billing’s proudly presents its highly qualified medical transcription team, one of the best in the US, who utilize the most advanced tools available to provide you with exemplary medical transcription services.',
    },
    {
      icon: 'icofont-prescription',
      title: 'Value-Added Services',
      description:
        'Premier Care Billing’s does more than just medical billing! Our dedicated team of professionals efficiently manages your revenue cycle to certify your productivity in the healthcare sector.',
    },
  ];
}
