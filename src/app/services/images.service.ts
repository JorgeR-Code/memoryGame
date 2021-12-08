import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class ImageNumbersService {

  private Images = new BehaviorSubject<boolean>(false);

  public customTemplate = this.Images.asObservable();

  constructor() {}
  public changeTemplate(template: boolean): void {
    this.Images.next(template);
  }
}
