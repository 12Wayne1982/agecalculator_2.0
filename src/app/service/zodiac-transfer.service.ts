import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZodiacTransferService {
  private dataSource = new BehaviorSubject<any>('default data');
  currentData = this.dataSource.asObservable();

  constructor() {}
  changeData(data: any) {
    console.log(data);
    this.dataSource.next(data);
  }
}
