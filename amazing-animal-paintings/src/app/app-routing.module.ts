import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  // home page redirects instantly to products
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  // shows product-list component on the /products page
  { path: 'products', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
