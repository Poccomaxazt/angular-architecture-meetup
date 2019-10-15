import { Developer } from './developer';
import { LanguageType } from '../../api/models/language-type';

export class PythonDeveloper extends Developer {
  public readonly technology: LanguageType = LanguageType.PYTHON;
  public readonly image: string = 'https://www.sphereinc.com/wp-content/uploads/2016/07/Zen-of-the-Python-Programming-Language.jpg';
  public readonly description: string = `Python is an interpreted, high-level, general-purpose programming language.
  Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability
  with its notable use of significant whitespace.
  Its language constructs and object-oriented approach aim to help programmers write clear,
  logical code for small and large-scale projects`;

  public getSkills(): string[] {
    return [
      'server',
      'mobile',
      'desktop'
    ];
  }
}
