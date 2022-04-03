import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('shopping-cart-animation', [
      state('close', style({
        opacity: 0
      })),
      state('open', style({
        opacity: 1
      })),
      transition('close <=> open', animate(1000)),
    ])
  ]
})
export class AppComponent {

  showShoppingCart = false;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    this.showShoppingCart = pos > 64;
  }
}
