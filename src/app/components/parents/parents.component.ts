import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent {
  public childMessage: string = '';

  constructor(private componentsService: ComponentsService) {}

  public setChildMessage() {
    this.componentsService.setChildMessage('parent using service');
    this.childMessage = this.componentsService.getMessageChild;
    console.log('CHILD message :' + this.childMessage);
  }
}
