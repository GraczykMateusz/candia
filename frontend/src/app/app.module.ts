import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DashboardComponent} from './compontents/dashboard/dashboard.component';
import {MenuComponent} from './compontents/menu/menu.component';
import {FooterComponent} from './compontents/footer/footer.component';
import {NewsletterComponent} from './compontents/newsletter/newsletter.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import { InformationsComponent } from './compontents/informations/informations.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import { ProductsComponent } from './compontents/dashboard/products/products.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ShoppingCartDialogComponent } from './compontents/shopping-cart-dialog/shopping-cart-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    NewsletterComponent,
    InformationsComponent,
    ProductsComponent,
    ShoppingCartDialogComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatBadgeModule,
        MatSelectModule,
        MatExpansionModule,
        MatCardModule,
        MatDividerModule,
        MatTabsModule,
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
