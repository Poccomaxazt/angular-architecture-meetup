import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import {MaterialModule} from '../material/material.module';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule
  ],
  declarations: [AppToolbarComponent],
  exports: [AppToolbarComponent]
})
export class CoreModule { }
