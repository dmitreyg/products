
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
/*
    console.log('product cimponent in init');
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
    });
  */
 this.products=[];
 alert('hello');
    }

}
