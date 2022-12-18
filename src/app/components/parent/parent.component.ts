import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  message: string = '';
  parentMessage: string = '';
  parentMessageSubs: string = '';
  childMessageObservable$!: Observable<string>;

  constructor(private componentsService: ComponentsService) {
    this.childMessageObservable$ =
      this.componentsService.childMessageObservable$;
    this.childMessageObservable$.subscribe((msg) => (this.message = msg));
  }

  getchildMessage(e: string) {
    this.message = e;
  }

  getParentMessage() {
    return this.componentsService.getParentMessage;
  }

  updateParentMessageWithInputProperty() {
    this.parentMessage = 'parent using input property';
  }

  // ngOnDestroy() {
  //   this.childMessageSubscription?.unsubscribe();
  // }
  setParentMessageWithObservable() {
    this.componentsService.setParentMessage('parent using observable');
  }

  updateChildMessageWithService() {
    this.componentsService.updateChildMessageWithService(
      'parent using service'
    );
  }
}
