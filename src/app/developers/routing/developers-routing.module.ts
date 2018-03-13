import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeveloperCabinetComponent} from '../components/developer-cabinet/developer-cabinet.component';
import {DevelopersComponent} from '../components/developers/developers.component';
import {AuthGuard} from '../../auth/guards/auth.guard';

export const devRoutes: Routes = [
  {
    path: '',
    component: DevelopersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'cabinet',
        pathMatch: 'full',
      },
      {
        path: 'cabinet',
        component: DeveloperCabinetComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      devRoutes,
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class DevelopersRoutingModule {
}
