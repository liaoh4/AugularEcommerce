import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from './product/services/product.service';
import { FadedFullScreenLoaderService } from './product/services/faded-full-screen-loader.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'edu-final-app';
  counter: number = 0;
  _timeouts: any;
  fadedFullScreenLoaderFlag: boolean = false;
  constructor(
    private _prodService: ProductService,
    private _fadedFullScreenLoaderService: FadedFullScreenLoaderService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._subscribeToFaded();
    this._prodService.tokenProviderObservable$.subscribe(
      (data) => (this.counter = data.counter)
    );
    console.log(this.counter);
  }

  private _subscribeToFaded() {
    this._fadedFullScreenLoaderService.fadedScreenLoaderObservable$.subscribe(
      this._subscribeTofadedOnservable
    );
  }

  private _subscribeTofadedOnservable = (state: boolean) => {
    this._timeouts = setTimeout(() => {
      this.fadedFullScreenLoaderFlag = state;
    }, 10);
  };

  checkout() {
    this._router.navigate(['/checkout']);
  }

  // ngOnDestroy(){
  //   this._timeouts.clearTimeout
  // }
}
