import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent {
  public childMessage: string = '';

  get parentMessage() {
    return this.componentsService.getParentMessage;
  }
  constructor(private componentsService: ComponentsService) {}

  public setChildMessage() {
    this.componentsService.setChildMessage('parent using service');
    console.log('CHILD message :' + this.childMessage);
  }
}
