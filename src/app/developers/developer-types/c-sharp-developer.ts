import {Developer} from './developer';
import {LanguageType} from '../../api/models/language-type';

export class CSharpDeveloper extends Developer {
  public readonly technology: LanguageType = LanguageType.CSHARP;
  public readonly image: string = 'https://static-s.aa-cdn.net/img/ios/486208408/4b0f049156bebd5d16774efc955e0994?v=1';
  public readonly description: string = `C# is a multi-paradigm programming language encompassing strong typing,
    imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming
    disciplines. It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma
    (ECMA-334) and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language
    Infrastructure.`;

  public getSkills(): string[] {
    return [
      'server',
      'desktop'
    ];
  }
}
