import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthRoutingModule } from './routing/auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { AuthEffects } from './store/auth.effects';
import { LanguagesModule } from '../languages/languages.module';
import { ApiModule } from '../api/api.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    LanguagesModule,
    ApiModule,

    /**
     * Store
     */
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent, AuthComponent],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
