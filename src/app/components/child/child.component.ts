import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  private _parentMessage: string = '';

  get pMessage() {
    return this._parentMessage;
  }

  @Input() set parentMessage(value: any) {
    console.log('previously: ' + this._parentMessage);
    this._parentMessage = value;
    console.log('currently: ' + value);
    this.message = value;
  }

  @Output()
  onChildSendMessage: EventEmitter<string> = new EventEmitter<string>();

  message: string = '';
  parentMessageObservable$!: Observable<string>;

  constructor(private componentsService: ComponentsService) {
    this.parentMessageObservable$ =
      this.componentsService.parentMessageObservable$;
    this.parentMessageObservable$.subscribe((msg) => (this.message = msg));
  }

  get getChildMessage() {
    return this.componentsService.getchildMessage;
  }

  // ngOnDestroy() {
  //   this.parentMessageSubscription?.unsubscribe();
  // }

  updateChildMessageWithOutput() {
    this.onChildSendMessage.emit('child using output event');
  }

  updateParentMessageWithService() {
    this.componentsService.updateParentMessageWithService(
      'child using service'
    );
  }

  setChildMessageWithObservable() {
    this.componentsService.setChildMessage('child using service');
  }
}
