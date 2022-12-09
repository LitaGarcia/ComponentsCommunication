import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private _messageParent: string = '';
  private _messageChild: string = '';

  constructor() {}

  get getMessageParent() {
    return this._messageParent;
  }

  get getMessageChild() {
    return this._messageChild;
  }

  public setMessageParent(message: string) {
    this._messageParent = message;
  }
  public setMessageChild(message: string) {
    this._messageChild = message;
  }
}
