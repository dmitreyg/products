import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products-app';

  products: any;

  constructor(private productService: ProductService,
private authService: AuthService, private router: Router)
  {
  }

  onLogout(): void {
    alert('log out');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

    loadProducts(): void {
      this.productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
    });
  }
}

