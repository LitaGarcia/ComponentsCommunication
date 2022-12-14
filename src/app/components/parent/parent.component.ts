import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  message: string = '';
  parentMessage: string = '';
  parentMessageSubs: string = '';
  childMessageSubscription: Subscription;

  constructor(private componentsService: ComponentsService) {
    this.childMessageSubscription =
      this.componentsService.childMessage$.subscribe((message) => {
        this.message = message;
      });
  }

  getchildMessage(e: string) {
    this.message = e;
  }

  get getParentMessage() {
    return this.componentsService.getParentMessage;
  }

  updateParentMessageWithInputProperty() {
    this.parentMessage = 'parent using input property';
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
