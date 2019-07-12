import { Component, OnInit, Input } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
  `
})
export class CollapsibleWellComponent {
  visible = false;

  toggleContent() {
    this.visible = !this.visible;
  }
}
