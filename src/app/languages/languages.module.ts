import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from './services/languages.service';
import { LangStatisticsComponent } from './components/lang-statistics/lang-statistics.component';
import { LangCommitsComponent } from './components/lang-statistics/lang-commits/lang-commits.component';
import { ApiModule } from '../api/api.module';
import { LanguagesSocketService } from './services/languages-socket.service';
import { LanguagesIoSocketService } from './services/languages-io-socket.service';
import { MaterialModule } from '../material/material.module';
import { environment } from '../../environments/environment';
import { LanguagesOfflineSocketService } from './services/languages-offline-socket.service';

@NgModule({
  imports: [
    CommonModule,
    ApiModule,
    MaterialModule
  ],
  declarations: [
    LangStatisticsComponent,
    LangCommitsComponent
  ],
  exports: [
    LangStatisticsComponent
  ],
  providers: [
    LanguagesService,
    {
      provide: LanguagesSocketService,
      useClass: environment.offline
        ? LanguagesOfflineSocketService
        : LanguagesIoSocketService
    }
  ]
})
export class LanguagesModule { }
