import { Injectable } from '@angular/core';
import { LanguageType } from '../../api/models/language-type';
import { JavaScriptDeveloper } from '../developer-types/java-script-developer';
import { CSharpDeveloper } from '../developer-types/c-sharp-developer';
import { DeveloperPosition } from '../../api/models/developer-position';
import { Developer } from '../developer-types/developer';
import { DevelopersService } from './developers.service';
import { JavaDeveloper } from '../developer-types/java-develop';
import { PythonDeveloper } from '../developer-types/python-developer';

@Injectable()
export class DevelopersFactoryService {

  public create(technology: LanguageType, devService: DevelopersService, position?: DeveloperPosition): Developer {
    switch (technology) {
      case LanguageType.JAVA:
        return new JavaDeveloper(devService, position);
      case LanguageType.JAVA_SCRIPT:
        return new JavaScriptDeveloper(devService, position);
      case LanguageType.CSHARP:
        return new CSharpDeveloper(devService, position);
      case LanguageType.PYTHON:
        return new PythonDeveloper(devService, position);
      default:
        console.warn(`Unknown developer type: ${technology}!`);
    }
  }

}
