import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { FunFact } from '../../../data/fun-fact.model';

@Component({
  selector: 'app-fun-facts',
  standalone: true,
  imports: [CustomSpinnerComponent],
  templateUrl: './fun-facts.component.html',
  styles: ``,
})
export class FunFactsComponent {
  funFacts: FunFact[] = [
    {
      icon: 'icofont-home',
      value: 2009,
      label: 'Founded',
    },
    {
      icon: 'icofont-user-alt-3',
      value: 100,
      label: 'Practices',
    },
    {
      icon: 'icofont-simple-smile',
      value: 22,
      label: 'States',
    },
    {
      icon: 'icofont-table',
      value: 10,
      label: 'Years of Experience',
    },
  ];
}
