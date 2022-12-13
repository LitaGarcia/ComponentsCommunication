import { Component, Input } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent {
  message: string = '';
  messageParent: string = '';
  parentMessageSubs: string = '';
  childMessageSubscription: Subscription;

  constructor(private componentsService: ComponentsService) {
    this.childMessageSubscription =
      this.componentsService.childMessage$.subscribe((message) => {
        this.message = message;
      });
  }

  getMessageChild(e: string) {
    this.message = e;
  }

  get parentMessage() {
    return this.componentsService.getParentMessage;
  }

  updateParentMessageWithInputProperty() {
    this.messageParent = 'parent using input property';
  }

  // ngOnDestroy() {
  //   this.childMessageSubscription?.unsubscribe();
  // }

  updateParentMessageWithObservable() {
    this.componentsService.parentMessage$.emit('parent using observable');
  }

  updateChildMessageWithService() {
    this.componentsService.updateChildMessageWithService(
      'parent using service'
    );
  }
}
