import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-gallery',
  template: `
    
    <div class="images-list">
      <my-gallery-controls 
        [showSearch]="showSearch" 
        [showPagination]="showPagination"
        [showSorting]="showSorting"
        [perPage]="perPage"
        (onSearch)="onSearch($event)"
        (onSort)="onSort($event)"
        (onPerPage)="perPageChanged($event)"
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
  @Input('per-page') 
  set perPageVal(_perPage: Number) {
    this.perPage = _perPage;
  }

  // public
  imagesToDisplay: any[];
  currentPage: Number = 1;
  perPage: Number = 10;

  // private
  private term = '';
  private sortBy;
  private paginateImages(images, perPage, currentPage, term = '', sortBy) {    
    let filterCb = !term.trim() ? () => true : ({title}) => title.toLowerCase().includes(term.toLowerCase());
    let sortCb = sortBy ? (a, b) => a[sortBy] > b[sortBy] ? 1: -1 : null;
    let offset = (currentPage - 1) * perPage;
    return [ ...(!sortBy ? images.filter(filterCb) : images.filter(filterCb).sort(sortCb))].slice(offset, offset + perPage);
  } 

  // handlers
  onSearch(term) {
    this.term = term;
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy);
  }

  onSort(sortBy) {
    this.sortBy = sortBy;
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy);
  }

  perPageChanged(_perPage) {
    this.perPage = _perPage;
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy);
  } 

  // livecycle
  ngOnInit(): void {
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy);
  }
}
