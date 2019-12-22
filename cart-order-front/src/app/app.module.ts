import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/components/user.component';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityConfig, defaultDataServiceConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { MaterialModule } from './material/material.module';
import { ItemDeleteComponent } from './item/item-delete/item-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    ItemCreateComponent,
    ItemListComponent,
    ItemDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),

    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
