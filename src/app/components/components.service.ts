import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private _parentMessage: string = '';
  private _childMessage: string = '';

  parentMessage$: EventEmitter<string> = new EventEmitter<string>();
  childMessage$: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  get getParentMessage() {
    return this._parentMessage;
  }

  get getMessageChild() {
    return this._childMessage;
  }

  public updateParentMessageWithService(message: string) {
    this._parentMessage = message;
  }
  public updateChildMessageWithService(message: string) {
    this._childMessage = message;
  }
}
