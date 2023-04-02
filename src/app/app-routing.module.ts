import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { EmpnameComponent } from './empname/empname.component';
const routes: Routes = [
  {path:'order/:id',component:OrderComponent},
  {path:'empname/:empname',component: EmpnameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
