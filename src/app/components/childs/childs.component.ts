import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css'],
})
export class ChildsComponent {
  public message: string = '';

  constructor(private componentsService: ComponentsService) {}

  public setMessageParent() {
    this.componentsService.setMessageParent('child using service');
    this.message = this.componentsService.getMessageParent;
    console.log('PARENT message :' + this.message);
  }
}
