import { Component, Input } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent {
  public messageParent: string = '';

  public childMessage: string = '';
  public childMessageOutput: string = '';

  public getMessageChild(e: string) {
    this.childMessageOutput = e;
  }

  get parentMessage() {
    return this.componentsService.getParentMessage;
  }
  public setChildMessageWithInput() {
    this.messageParent = 'parent using input property';
  }
  constructor(private componentsService: ComponentsService) {}

  public setChildMessage() {
    this.componentsService.setChildMessage('parent using service');
  }
}
