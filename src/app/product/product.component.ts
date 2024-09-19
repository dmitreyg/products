
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    console.log('product cimponent in init');
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
    });

 //this.products=[];
    }

}
