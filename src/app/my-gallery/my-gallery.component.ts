import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-gallery',
  template: `
    
    <div class="images-list">
      <my-gallery-controls 
        [showSearch]="showSearch" 
        [showPagination]="showPagination"
        [showSorting]="showSorting"
      ></my-gallery-controls>
      <ul>
        <li *ngFor="let img of imagesToDisplay">
          <my-gallery-image [image]="img"></my-gallery-image>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {
  @Input() images: any[];
  @Input('search') showSearch: Boolean = true;
  @Input('pagination') showPagination: Boolean = true;
  @Input('sorting') showSorting: Boolean = true;
  @Input('per-page') perPage: Number = 10;

  imagesToDisplay: any[];
  currentPage: Number = 2;

  // private
  private paginateImages(images, perPage, currentPage) {
     let offset = (currentPage - 1) * perPage;
     return images.slice(offset, offset + perPage);
  } 

  constructor() { }

  ngOnInit(): void {
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage)
  }

}
