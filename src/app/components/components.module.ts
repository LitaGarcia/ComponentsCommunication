import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  exports: [ChildComponent, ParentComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
