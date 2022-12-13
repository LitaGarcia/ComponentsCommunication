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

  parentMessage: string = '';
  parentMessageSubs: string = '';
  messageParentSubscription: Subscription | undefined;
  childMessageSubs: string = '';

  get childMessage() {
    return this.componentsService.getMessageChild;
  }

  constructor(private componentsService: ComponentsService) {}

  ngOnInit() {
    this.messageParentSubscription =
      this.componentsService.parentMessage$.subscribe((parentMessageSubs) => {
        this.parentMessageSubs = parentMessageSubs;
      });
    //create a subscribe for childmessage
    this.componentsService.childMessage$.subscribe((childMessageSubs) => {
      this.childMessageSubs = childMessageSubs;
      console.log(childMessageSubs);
    });
  }

  ngOnDestroy() {
    this.messageParentSubscription?.unsubscribe();
  }

  updateChildMessageWithOutput() {
    console.log('eliminando subs');

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
