import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../shared/models/form-component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageType } from '../../../api/models/language-type';
import { Language } from '../../../api/models/language';
import { Observable } from 'rxjs/Observable';
import { LanguagesService } from '../../../languages/services/languages.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'im-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, FormComponent {
  public form: FormGroup;
  public languages$: Observable<Language[]>;
  public loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private langService: LanguagesService,
    private authService: AuthService
  ) {
    this.loading$ = this.authService.isLoading();
  }

  public ngOnInit(): void {
    this.initLanguages();
    this.initLoginForm();
  }

  private initLanguages(): void {
    this.languages$ = this.langService.getLanguages();
  }

  private initLoginForm(): void {
    this.form = this.fb.group({
      name: ['IM Guest', Validators.required],
      technology: [LanguageType.JAVA_SCRIPT, Validators.required]
    });
  }

  public trackById(index: number, item: Language): string {
    return item.id;
  }

  public onLogin(): void {
    this.authService.login(this.form.value);
  }
}
