import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';
import { MaterialModule } from '../material/material.module';
import { ConfirmModalContentComponent } from './components/confirm-modal/confirm-modal-content.component';
import { ConfirmationService } from './services/confirmation.service';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { ConfirmModalService } from './services/confirm-modal.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ConfirmModalContentComponent,
    DynamicComponentDirective
  ],
  entryComponents: [
    ConfirmModalContentComponent
  ],
  exports: [
    DynamicComponentDirective
  ],
  providers: [
    ConfirmationService,
    ConfirmModalService
  ]
})
export class SharedModule {
  private static _store: Store<State>;

  public static get store(): Store<State> {
    return this._store;
  }

  constructor(store: Store<State>) {
    SharedModule._store = store;
  }
}
