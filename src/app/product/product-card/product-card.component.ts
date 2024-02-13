import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productData: any;
  buyNow: boolean = false;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  buy(id: any){
    // this.buyNow = true;
    this._router.navigate(['/shop-product', id])
  }

}
