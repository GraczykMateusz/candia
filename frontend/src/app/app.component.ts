import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {ShoppingBasketDialogComponent} from "./compontents/shopping-basket-dialog/shopping-basket-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('shopping-basket-animation', [
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

  MENU_HEIGHT = 64;
  showShoppingBasket = false;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(): void {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    this.showShoppingBasket = pos > this.MENU_HEIGHT;
  }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ShoppingBasketDialogComponent);
  }
}
