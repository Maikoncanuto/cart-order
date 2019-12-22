import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/components/user.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDeleteComponent } from './item/item-delete/item-delete.component';
import { ItemUpdateComponent } from './item/item-update/item-update.component';


const routes: Routes = [
  { path: 'user' , component: UserComponent},
  { path: 'item/list' , component: ItemListComponent},
  { path: 'item/create' , component: ItemCreateComponent},
  { path: 'itens/delete/:id', component: ItemDeleteComponent },
  { path: 'itens/update/:id', component: ItemUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
