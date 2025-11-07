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
      name: 'Vivek Murthy',
      position: 'MD',
    },
    {
      imageUrl: 'assets/img/pf2.jpg',
      detailsLink: '/blog',
      quote:
        'Their team handles our billing with precision and transparency. We’ve seen a significant boost in revenue cycle efficiency.',
      name: 'Sanjay Gupta',
      position: 'MD',
    },
    {
      imageUrl: 'assets/img/pf3.jpg',
      detailsLink: '/blog',
      quote:
        'Thanks to Premier Care Billing, our claim denials have dropped drastically. Their reporting tools keep us informed at every step.',
      name: 'Anthony Fauci',
      position: 'MD',
    },
    {
      imageUrl: 'assets/img/pf4.jpg',
      detailsLink: '/blog',
      quote:
        'Their expertise in medical billing compliance and coding accuracy has saved us countless hours of administrative work.',
      name: 'Mandy Cohen',
      position: 'MD, MPH',
    },
    {
      imageUrl: 'assets/img/pf1.jpg',
      detailsLink: '/blog',
      quote:
        'We’ve partnered with Premier Care Billing for over a year now — our collections have improved and our staff workload has decreased.',
      name: 'Jeanne Marrazzo',
      position: 'MD',
    },
    {
      imageUrl: 'assets/img/pf2.jpg',
      detailsLink: '/blog',
      quote:
        'Professional, reliable, and always proactive. Premier Care Billing helped us achieve cleaner claims and faster payments.',
      name: 'Atul Gawande',
      position: 'MD, MPH',
    },
    {
      imageUrl: 'assets/img/pf3.jpg',
      detailsLink: '/blog',
      quote:
        'Their detailed analytics and transparent communication make them the perfect billing partner for any healthcare provider.',
      name: 'Mark Hyman',
      position: 'MD',
    },
  ];
}
