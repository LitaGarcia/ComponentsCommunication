import { Component, Input } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent {
  @Input()
  public childMessage: string = '';
  public childMessageOutput: string = '';

  public getMessageChild(e: string) {
    this.childMessageOutput = e;
  }

  get parentMessage() {
    return this.componentsService.getParentMessage;
  }
  constructor(private componentsService: ComponentsService) {}

  public setChildMessage() {
    this.componentsService.setChildMessage('parent using service');
  }
}
