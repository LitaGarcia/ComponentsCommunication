import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildsComponent } from './childs/childs.component';
import { ParentsComponent } from './parents/parents.component';

@NgModule({
  declarations: [ChildsComponent, ParentsComponent],
  exports: [ChildsComponent, ParentsComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
