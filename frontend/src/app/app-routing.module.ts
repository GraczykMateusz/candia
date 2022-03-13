import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./compontents/home/home.component";
import {ContactComponent} from "./compontents/contact/contact.component";
import {CoffeehouseComponent} from "./compontents/coffeehouse/coffeehouse.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'kawiarnia', component: CoffeehouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
