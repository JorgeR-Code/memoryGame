import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class ChangeTimeService {

  private time = new BehaviorSubject<number>(100);

  public customTimer = this.time.asObservable();

  constructor() {}
  public changeTime(tm: number): void {
    this.time.next(tm);
  }
}
