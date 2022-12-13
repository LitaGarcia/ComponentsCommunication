import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css'],
})
export class ChildsComponent {
  @Input() messageParent: string = '';
  @Output() onChildSendMessage: EventEmitter<string> =
    new EventEmitter<string>();

  message: string = '';
  parentMessageSubs: string = '';
  messageParentSubscription: Subscription | undefined;
  childMessageSubs: string = '';

  constructor(private componentsService: ComponentsService) {
    this.messageParentSubscription =
      this.componentsService.parentMessage$.subscribe((message) => {
        this.message = message;
      });
  }

  get childMessage() {
    return this.componentsService.getMessageChild;
  }

  // ngOnDestroy() {
  //   this.messageParentSubscription?.unsubscribe();
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
