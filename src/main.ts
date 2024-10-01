import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config';
import { AppComponent } from './app/app.component';
import { ProductComponent } from './app/product/product.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app/services/auth.interceptor';




bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
