import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class DevsEffects {
  constructor(
    private actions$: Actions
  ) { }
}
