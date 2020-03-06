import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-gallery',
  template: `
    <div class="images-list">
      <ul>
        <li *ngFor="let img of images">
          <my-gallery-image [image]="img"></my-gallery-image>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {
  @Input() images: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
