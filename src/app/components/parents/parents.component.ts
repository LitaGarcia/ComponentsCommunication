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

  public updateMessage() {
    this.componentsService.setMessageParent('parent using service');

    this.message = this.componentsService.getMessageParent;
    console.log(this.message);
  }
}
