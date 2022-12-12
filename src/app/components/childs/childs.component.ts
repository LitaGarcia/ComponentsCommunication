import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css'],
})
export class ChildsComponent {
  public parentMessage: string = '';

  constructor(private componentsService: ComponentsService) {}

  public setParentMessage() {
    this.componentsService.setParentMessage('child using service');
    this.parentMessage = this.componentsService.getParentMessage;
    console.log('PARENT message :' + this.parentMessage);
  }
}
