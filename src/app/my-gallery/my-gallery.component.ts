import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-gallery',
  template: `
    
    <div class="images-list">
      <my-gallery-controls 
        [showSearch]="showSearch" 
        [showPagination]="showPagination"
      ></my-gallery-controls>
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
  @Input('search') showSearch: boolean = true;
  @Input('pagination') showPagination: boolean = true;


  constructor() { }

  ngOnInit(): void {
    
  }

}
