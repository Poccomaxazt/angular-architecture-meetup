import {Developer} from './developer';
import {LanguageType} from '../../api/models/language-type';

export class JavaDeveloper extends Developer {
  public readonly technology: LanguageType = LanguageType.JAVA;
  public readonly image: string = 'https://exicom.se/wp-content/uploads/2014/01/java-logo-vector.png';
  public readonly description: string = `Java is a general-purpose computer-programming language that is concurrent,
  class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.
  It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code
  can run on all platforms that support Java without the need for recompilation. Java applications are typically
  compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture.
  As of 2016, Java is one of the most popular programming languages in use, particularly for client-server web applications,
  with a reported 9 million developers.`;

  public getSkills(): string[] {
    return [
      'server',
      'mobile'
    ];
  }
}
