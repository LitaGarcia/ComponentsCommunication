import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() parentMessage: string = '';
  @Output() onChildSendMessage: EventEmitter<string> =
    new EventEmitter<string>();

  message: string = '';
  parentMessageSubs: string = '';
  parentMessageSubscription: Subscription | undefined;
  childMessageSubs: string = '';

  constructor(private componentsService: ComponentsService) {
    this.parentMessageSubscription =
      this.componentsService.parentMessage$.subscribe((message) => {
        this.message = message;
      });
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

  updateChildMessageWithObservable() {
    this.componentsService.childMessage$.emit('child using observable');
  }
}
