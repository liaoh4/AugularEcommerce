import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class CartComponent implements OnInit {
  ordered: boolean = false;
  products: any = [];
  newProduct: any;
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.products = this._productService.getProducts();
    // this._subscribeToProducts();
  }
  complete() {
    this.ordered = true;
    this._productService.products = [];
    this._productService.setCounter(null);
  }

  explore() {
    this._router.navigate(['/products']);
  }
}
