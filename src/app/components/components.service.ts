import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private _parentMessage: string = '';
  private _childMessage: string = '';
  private _childMessage$: Subject<string> = new Subject();
  childMessageObservable$: Observable<string> =
    this._childMessage$!.asObservable();
  private _parentMessage$: Subject<string> = new Subject();
  parentMessageObservable$: Observable<string> =
    this._parentMessage$!.asObservable();
  constructor() {}

  getParentMessage() {
    return this._parentMessage;
  }

  getchildMessage() {
    return this._childMessage;
  }

  updateParentMessageWithService(message: string) {
    this._parentMessage = message;
  }
  updateChildMessageWithService(message: string) {
    this._childMessage = message;
  }

  setChildMessage(message: string) {
    this._childMessage$.next(message);
  }
  setParentMessage(message: string) {
    this._parentMessage$.next(message);
  }
}
