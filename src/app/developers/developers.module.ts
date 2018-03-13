import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeveloperCabinetComponent} from './components/developer-cabinet/developer-cabinet.component';
import {DeveloperActionsComponent} from './components/developer-actions/developer-actions.component';
import {DevelopersComponent} from './components/developers/developers.component';
import {DevelopersRoutingModule} from './routing/developers-routing.module';
import {LanguagesModule} from '../languages/languages.module';
import {MaterialModule} from '../material/material.module';
import {BrowserSkillComponent} from './components/skills/browser-skill/browser-skill.component';
import {DesktopSkillComponent} from './components/skills/desktop-skill/desktop-skill.component';
import {DeveloperCardComponent} from './components/developer-card/developer-card.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {DevsEffects} from './store/developers.effects';
import {SharedModule} from '../shared/shared.module';
import { SkillsListComponent } from './components/skills/skills-list/skills-list.component';
import { ServerSkillComponent } from './components/skills/server-skill/server-skill.component';
import { ClientSkillComponent } from './components/skills/client-skill/client-skill.component';
import { MobileSkillComponent } from './components/skills/mobile-skill/mobile-skill.component';
import {AuthModule} from '../auth/auth.module';
import { DevelopersFactoryService } from './services/developers-factory.service';
import { DevelopersService } from './services/developers.service';

@NgModule({
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    LanguagesModule,
    MaterialModule,
    SharedModule,
    AuthModule,

    /**
     * Store
     */
    StoreModule.forFeature('devs', reducers),
    EffectsModule.forFeature([DevsEffects])
  ],
  declarations: [
    DeveloperCabinetComponent,
    DeveloperActionsComponent,
    DevelopersComponent,
    BrowserSkillComponent,
    DesktopSkillComponent,
    DeveloperCardComponent,
    SkillsListComponent,
    ServerSkillComponent,
    ClientSkillComponent,
    MobileSkillComponent
  ],
  entryComponents: [
    BrowserSkillComponent,
    DesktopSkillComponent,
    ServerSkillComponent,
    ClientSkillComponent,
    MobileSkillComponent
  ],
  providers: [
    DevelopersFactoryService,
    DevelopersService
  ]
})
export class DevelopersModule { }
