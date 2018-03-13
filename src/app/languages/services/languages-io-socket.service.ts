import {LanguagesSocketService} from './languages-socket.service';

export class LanguagesIoSocketService extends LanguagesSocketService {
  constructor() {
    super();
    this.connect();
  }

  public connect() {
  }

  public getStatistic() {
    return null;
  }

  public emit() {
  }

  public disconnect() {
  }
}
