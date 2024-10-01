import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes';

import { provideHttpClient } from '@angular/common/http';

import { ProductService } from './services/product.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
provideZoneChangeDetection({ eventCoalescing: true }),
provideRouter(routes),
provideHttpClient(),
ProductService,
{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]
};
