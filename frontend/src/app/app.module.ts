import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './compontents/footer/footer.component';
import {MenuComponent} from './compontents/menu/menu.component';
import {HomeComponent} from './compontents/home/home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { CoffeehouseComponent } from './compontents/coffeehouse/coffeehouse.component';
import { ContactComponent } from './compontents/contact/contact.component';
import { ReservationComponent } from './compontents/reservation/reservation.component';
import { LogoComponent } from './compontents/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    CoffeehouseComponent,
    ContactComponent,
    ReservationComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
