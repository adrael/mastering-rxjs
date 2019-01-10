import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: [ './documentation.component.scss' ]
})
export class DocumentationComponent {
  @Input() public link: string;
  @Input() public marble: string;
}
