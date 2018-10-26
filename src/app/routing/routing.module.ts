import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule',
  },
  {
    path: 'developer',
    loadChildren: 'app/developers/developers.module#DevelopersModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutingModule {}
