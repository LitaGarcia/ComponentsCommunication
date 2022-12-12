import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private _parentMessage: string = '';
  private _childMessage: string = '';

  constructor() {}

  get getParentMessage() {
    return this._parentMessage;
  }

  get getMessageChild() {
    return this._childMessage;
  }

  public setParentMessage(message: string) {
    this._parentMessage = message;
  }
  public setChildMessage(message: string) {
    this._childMessage = message;
  }
}
