import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css'],
})
export class ChildsComponent {
  public parentMessage: string = '';

  get childMessage() {
    return this.componentsService.getMessageChild;
  }
  constructor(private componentsService: ComponentsService) {}

  public setParentMessage() {
    this.componentsService.setParentMessage('child using service');
    console.log('PARENT message :' + this.parentMessage);
  }
}
