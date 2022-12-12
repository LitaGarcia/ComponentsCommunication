import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent {
  public message: string = '';

  constructor(private componentsService: ComponentsService) {}

  public setMessageChild() {
    this.componentsService.setMessageChild('parent using service');
    this.message = this.componentsService.getMessageChild;
    console.log('CHILD message :' + this.message);
  }
}
