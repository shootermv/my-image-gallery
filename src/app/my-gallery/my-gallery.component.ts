import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-gallery',
  template: `
    <div class="images-list">
      <ul>
        <li *ngFor="let img of images">
          <img class="main" src="{{img.url}}"/>
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
