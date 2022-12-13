import { Component, Input } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent {
  messageParent: string = '';
  parentMessageSubs: string = '';
  childMessage: string = '';
  childMessageOutput: string = '';
  childMessageSubs: string = '';
  childMessageSubscription: Subscription | undefined;

  getMessageChild(e: string) {
    this.childMessageOutput = e;
  }

  get parentMessage() {
    return this.componentsService.getParentMessage;
  }

  updateParentMessageWithInputProperty() {
    this.messageParent = 'parent using input property';
  }

  constructor(private componentsService: ComponentsService) {}

  ngOnInit() {
    this.componentsService.parentMessage$.subscribe((parentMessageSubs) => {
      this.parentMessageSubs = parentMessageSubs;
      console.log(parentMessageSubs);
    });
    //subscribe to the newchildmessage
    this.childMessageSubscription =
      this.componentsService.childMessage$.subscribe((childMessageSubs) => {
        this.childMessageSubs = childMessageSubs;
        console.log(childMessageSubs);
      });
  }
  ngOnDestroy() {
    this.childMessageSubscription?.unsubscribe();
  }

  updateParentMessageWithObservable() {
    this.componentsService.parentMessage$.emit('parent using observable');
  }

  updateChildMessageWithService() {
    this.componentsService.updateChildMessageWithService(
      'parent using service'
    );
  }
}
