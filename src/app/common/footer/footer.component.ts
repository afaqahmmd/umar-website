import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CopyrightComponent } from '../utility/copyright/copyright.component';
import {
  AboutUs,
  OpenHours,
  QuickLink,
  SocialLink,
} from '../../data/footer-data.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CopyrightComponent,NgFor],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {

  hospitalName = 'Hospital Name';
  aboutUs: AboutUs = {
    description:
      'Our company (Premier Care Billing LLC) has billed for more than 100+ practices in 22 states. Our medical billing expert team works with providers nationwide to decrease stress of the billing and, more important, to increase cash flow. Our management team collectively has more than five decades of experience in managing the revenue cycle of practices from different specialties.',
  };

  socialLinks: SocialLink[] = [
    { url: 'https://facebook.com/yourpage', icon: 'icofont-facebook' },
    { url: 'https://plus.google.com/yourpage', icon: 'icofont-google-plus' },
    { url: 'https://twitter.com/yourpage', icon: 'icofont-twitter' },
    { url: 'https://vimeo.com/yourpage', icon: 'icofont-vimeo' },
    { url: 'https://pinterest.com/yourpage', icon: 'icofont-pinterest' },
  ];

  quickLinksLeft: QuickLink[] = [
    { url: '/home', label: 'Home' },
    { url: '/about', label: 'About Us' },
  ];

  quickLinksRight: QuickLink[] = [
    { url: '/services', label: 'Services' },
    { url: '/contact', label: 'Contact Us' },
  ];

  openHours: OpenHours = {
    description:
      'At Premier Care Billing' +
      ', we are dedicated to being available when you need us most. Our team is here to provide excellent care during our convenient hours of operation.',
    hours: [
    ],
  };
}
