import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderItem } from '../../../data/slider-item.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './slider.component.html',
  styles: ``,
})
export class SliderComponent {
  sliders: SliderItem[] = [
    {
      backgroundImage: 'assets/img/slider2.jpg',
      title: 'Medical Billing',
      subtitle: 'Simplified',
      description:
        '4-7% of Practice Collections - Based on Volume & Specialty. Our medical billing professionals improve collections, reduce account receivable & costs.',
      buttons: [
        { text: 'I want to start', link: '/appointment' },
      ],
    },
    {
      backgroundImage: 'assets/img/slider.jpg',
      title: 'Free Practice',
      subtitle: 'Consulting',
      description:
        'Let our consultants provide the best answers to your medical practice queries',
      buttons: [
        { text: 'Im interested', link: '/appointment' },
     
      ],
    },
  
  ];
}
