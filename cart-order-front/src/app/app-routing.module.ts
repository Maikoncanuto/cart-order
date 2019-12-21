import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/components/user.component';
import { ItemComponent } from './item/components/item.component';


const routes: Routes = [
  { path: 'user' , component: UserComponent},
  { path: 'item' , component: ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
