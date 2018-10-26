import {Developer} from './developer';
import {LanguageType} from '../../api/models/language-type';

export class JavaScriptDeveloper extends Developer {
  public readonly technology: LanguageType = LanguageType.JAVA_SCRIPT;
  public readonly image: string = 'https://cdn.auth0.com/blog/es6rundown/logo.png';
  public readonly description: string = `Front-end web development is the practice of producing HTML,
    CSS and usually JavaScript (while WebAssembly is a recent alternative to it) for a website or Web Application
    so that a user can see and interact with them directly.`;

  public getSkills(): string[] {
    return [
      'client',
      'mobile',
      'browser'
    ];
  }
}
