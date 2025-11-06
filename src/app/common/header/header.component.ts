import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TopbarComponent],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  home: string = 'active';

  constructor(private router: Router) {
    // Track active link state
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects === '/home' || event.urlAfterRedirects === '/') {
          this.home = 'active';
        } else {
          this.home = '';
        }
      });
  }

  // 🔹 Generic method for scrolling to any section on Home
  goToSection(sectionId: string) {
    const currentUrl = this.router.url.split('#')[0];

    if (currentUrl === '/home' || currentUrl === '/') {
      this.scrollToElement(sectionId);
    } else {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => this.scrollToElement(sectionId), 300);
      });
    }
  }

  private scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
