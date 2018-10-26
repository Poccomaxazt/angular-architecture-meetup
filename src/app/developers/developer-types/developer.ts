import { LanguageType } from '../../api/models/language-type';
import { DeveloperPosition } from '../../api/models/developer-position';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DevelopersService } from '../services/developers.service';

export abstract class Developer {
  public readonly technology: LanguageType;
  public readonly image: string;
  public readonly description: string;

  private devService: DevelopersService;
  private position: BehaviorSubject<DeveloperPosition> = new BehaviorSubject(DeveloperPosition.TRAINEE);

  public commits$: Observable<number>;

  constructor(devService: DevelopersService, position?: DeveloperPosition) {
    this.devService = devService;

    if (position) {
      this.setPosition(position);
    }

    this.commits$ = this.devService.getCommits();
  }

  public abstract getSkills(): string[];

  public updatePosition(): void {
    switch (this.getPosition()) {
      case DeveloperPosition.TRAINEE:
        this.setPosition(DeveloperPosition.JUNIOR);
        break;
      case DeveloperPosition.JUNIOR:
        this.setPosition(DeveloperPosition.MIDDLE);
        break;
      case DeveloperPosition.MIDDLE:
        this.setPosition(DeveloperPosition.SENIOR);
        break;
      case DeveloperPosition.SENIOR:
        this.setPosition(DeveloperPosition.EXPERT);
        break;
      default:
        console.warn('Attention! Developer can start thinking about Manager :(');
    }
  }

  public isUpdatePossible(c: number): boolean {
    return c > 1;
  }

  public get position$(): Observable<DeveloperPosition> {
    return this.position.asObservable();
  }

  public getPosition(): DeveloperPosition {
    return this.position.getValue();
  }

  private setPosition(position: DeveloperPosition): void {
    this.position.next(position);
  }

  public makeCommit(): void {
    this.devService.makeCommit();
  }
}
