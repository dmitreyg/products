import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
  // Add other routes here
];

