import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-gallery',
  template: `
    
    <div class="images-list">
      <my-gallery-controls 
        [showSearch]="showSearch" 
        [showPagination]="showPagination"
        [showSorting]="showSorting"
        (onSearch)="onSearch($event)"
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
  currentPage: Number = 1;

  // private
  private term = '';
  private sortBy;
  private paginateImages(images, perPage, currentPage, term = '', sortBy) {
    
    let filterCb = !term.trim() ? () => true : ({title}) => title.toLowerCase().includes(term.toLowerCase());
    let offset = (currentPage - 1) * perPage;
    return images.filter(filterCb).slice(offset, offset + perPage);
  } 

  // handlers
  onSearch(term) {
    this.term = term;
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy)
  }

  onSort(term) {

  }


  ngOnInit(): void {
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy)
  }

}
