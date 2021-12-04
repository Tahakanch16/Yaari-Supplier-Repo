import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {

  public supplierName:BehaviorSubject<String>=new BehaviorSubject<String>("");

  constructor() { }
}
