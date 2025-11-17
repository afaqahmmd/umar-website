import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { adminInterceptor } from './interceptor/admin.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',  // 👈 scroll to top on navigation
        anchorScrolling: 'enabled',        // 👈 enable #section scrolling
      })
    ),

    provideHttpClient(withInterceptors([adminInterceptor])),
  ],
};
