import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CompteService } from './compte.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AlertService } from './alerte.service';

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes),HttpClient]

  providers: [
    provideRouter(routes),
    HttpClient,
    provideHttpClient(),
    AlertService,
    CompteService, provideAnimationsAsync(),
  ],
};
