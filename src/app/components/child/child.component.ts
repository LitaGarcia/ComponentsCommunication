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
  @Input() set parentMessage(value: any) {
    this._parentMessage = value;
    this.message = value;
  }
  @Output()
  onChildSendMessage: EventEmitter<string> = new EventEmitter<string>();

  message: string = '';
  parentMessageObservable$!: Observable<string>;

  constructor(private componentsService: ComponentsService) {}

  ngOnInit(): void {
    this.parentMessageObservable$ =
      this.componentsService.parentMessageObservable$;
    this.parentMessageObservable$.subscribe((msg) => (this.message = msg));
  }

  getParentMessageWithService() {
    return this.componentsService.getParentMessageWithService();
  }

  setChildMessageWithOutput() {
    this.onChildSendMessage.emit('child using output event');
  }

  setChildMessageWithService() {
    this.componentsService.setChildMessageWithService('child using service');
  }

  setChildMessageWithObservable() {
    this.componentsService.setChildMessage('child using observable');
  }

  // ngOnDestroy() {
  //   this.parentMessageSubscription?.unsubscribe();
  // }
}
