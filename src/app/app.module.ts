import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {RoutingModule} from './routing/routing.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store/reducers';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomRouterStateSerializer} from './shared/utils/router-utils';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /**
     * Core Angular
     */
    BrowserModule,
    BrowserAnimationsModule,

    /**
     * App Features
     */
    CoreModule,
    SharedModule,

    /**
     * Routing
     */
    RoutingModule,

    /**
     * Store
     */
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of reducer key
    }),
    EffectsModule.forRoot([]),

    /**
     * Material
     */
    MaterialModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
