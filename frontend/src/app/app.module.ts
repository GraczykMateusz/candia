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
import {InformationsComponent} from './compontents/informations/informations.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {ProductsComponent} from './compontents/dashboard/products/products.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ShoppingBasketDialogComponent} from './compontents/shopping-basket-dialog/shopping-basket-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {PortraitsComponent} from './compontents/dashboard/portraits/portraits.component';
import {CategoriesComponent} from './compontents/dashboard/categories/categories.component';
import {HotDealsComponent} from './compontents/dashboard/hot-deals/hot-deals.component';
import {NgImageSliderModule} from "ng-image-slider";
import { HistoryComponent } from './compontents/dashboard/history/history.component';
import { TitleComponent } from './compontents/dashboard/title/title.component';
import {MatSliderModule} from "@angular/material/slider";
import {OverviewComponent} from "./compontents/dashboard/overview/overview.component";
import { SocialMediaComponent } from './compontents/dashboard/social-media/social-media.component';
import { BrandsComponent } from './compontents/dashboard/brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    NewsletterComponent,
    InformationsComponent,
    ProductsComponent,
    ShoppingBasketDialogComponent,
    PortraitsComponent,
    CategoriesComponent,
    HotDealsComponent,
    HistoryComponent,
    TitleComponent,
    OverviewComponent,
    SocialMediaComponent,
    BrandsComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        NgImageSliderModule,
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
        MatDialogModule,
        MatSliderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
