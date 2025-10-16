import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { RouterLink } from '@angular/router';
import { PortfolioItem } from '../../../data/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CustomSpinnerComponent],
  templateUrl: './portfolio.component.html',
  styles: ``,
})
export class PortfolioComponent {
  portfolioItems: PortfolioItem[] = [
    { imageUrl: 'assets/img/pf1.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf2.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf3.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf4.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf1.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf2.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf3.jpg', detailsLink: '/blog' },
    { imageUrl: 'assets/img/pf4.jpg', detailsLink: '/blog' },
  ];

 testimonialItems = [
  {
    imageUrl: 'assets/img/pf1.jpg',
    detailsLink: '/blog',
    quote:
      'Premier Care Billing has simplified our entire claims process — reimbursements are faster and error-free!',
    name: 'Sarah Khan',
    position: 'Practice Manager, Horizon Medical Center',
  },
  {
    imageUrl: 'assets/img/pf2.jpg',
    detailsLink: '/blog',
    quote:
      'Their team handles our billing with precision and transparency. We’ve seen a significant boost in revenue cycle efficiency.',
    name: 'Ali Raza',
    position: 'Director of Operations, Nova Health Clinic',
  },
  {
    imageUrl: 'assets/img/pf3.jpg',
    detailsLink: '/blog',
    quote:
      'Thanks to Premier Care Billing, our claim denials have dropped drastically. Their reporting tools keep us informed at every step.',
    name: 'Fatima Ahmed',
    position: 'Billing Coordinator, MedAssist Group',
  },
  {
    imageUrl: 'assets/img/pf4.jpg',
    detailsLink: '/blog',
    quote:
      'Their expertise in medical billing compliance and coding accuracy has saved us countless hours of administrative work.',
    name: 'Hassan Malik',
    position: 'Chief Financial Officer, Green Valley Hospital',
  },
  {
    imageUrl: 'assets/img/pf1.jpg',
    detailsLink: '/blog',
    quote:
      'We’ve partnered with Premier Care Billing for over a year now — our collections have improved and our staff workload has decreased.',
    name: 'Zainab Rehman',
    position: 'Clinic Administrator, Sunrise Family Practice',
  },
  {
    imageUrl: 'assets/img/pf2.jpg',
    detailsLink: '/blog',
    quote:
      'Professional, reliable, and always proactive. Premier Care Billing helped us achieve cleaner claims and faster payments.',
    name: 'Ahmad Nawaz',
    position: 'Revenue Manager, MedCore Physicians Group',
  },
  {
    imageUrl: 'assets/img/pf3.jpg',
    detailsLink: '/blog',
    quote:
      'Their detailed analytics and transparent communication make them the perfect billing partner for any healthcare provider.',
    name: 'Ayesha Noor',
    position: 'Operations Lead, CareWell Clinics',
  },
  {
    imageUrl: 'assets/img/pf4.jpg',
    detailsLink: '/blog',
    quote:
      'With Premier Care Billing, our billing cycle turnaround time has improved tremendously — a trustworthy partner indeed!',
    name: 'Bilal Haider',
    position: 'Managing Director, LifeFirst Medical Center',
  },
];

}
