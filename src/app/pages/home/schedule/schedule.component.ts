import { Component } from '@angular/core';
import { ScheduleItem } from '../../../data/schedule-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './schedule.component.html',
  styles: ``,
})
export class ScheduleComponent {
  scheduleItems: ScheduleItem[] = [
    {
      icon: 'fa fa-ambulance',
      category: '',
      title: 'Front Office Management',
      description:
        'Front Office Management is a service that our company is known for. Our professional team is highly qualified when it comes to front office management and has earned us a large number of permanent retainers, given the excellent services that they have provided.',
      linkText: '',
      linkUrl: '',
    },
     {
      icon: 'icofont-ui-clock',
      category: '',
      title: 'Medical Transcription',
      description:
        'Our professionally trained medical transcription experts work meticulously to ensure that your data is accurately transcribed. Premier Care Billing provides medical transcription services to hospitals, clinics, and solo-practices.',
      linkText: '',
      linkUrl: '',
    },
    {
      icon: 'icofont-prescription',
      category: '',
      title: 'Medical Billing Management',
      description:
        'Our professional Medical Billing Services are known for being precise and fastidious when it comes to coding, claim preparation, medical billing, and claim submission. Premier Care Billing is known for its expert and accurate medical billing services in the USA.',
      linkText: '',
      linkUrl: '',
    },
   
  ];
}
