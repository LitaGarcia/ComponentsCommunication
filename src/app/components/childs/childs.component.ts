import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css'],
})
export class ChildsComponent {
  @Output() onChildSendMessage: EventEmitter<string> =
    new EventEmitter<string>();

  public parentMessage: string = '';


  get childMessage() {
    return this.componentsService.getMessageChild;
  }
  constructor(private componentsService: ComponentsService) {}

  public sendChildMessageWithOutput() {
    this.onChildSendMessage.emit('child using output event');
  }

  public setParentMessage() {
    this.componentsService.setParentMessage('child using service');
  }
}
