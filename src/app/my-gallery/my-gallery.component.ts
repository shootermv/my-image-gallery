import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-gallery',
  template: `
    
    <div class="images-list" [ngClass]="{'slideshow': isSlideShow}">
      <my-gallery-controls 
        [showSearch]="showSearch" 
        [showPagination]="showPagination"
        [showSorting]="showSorting"
        [perPage]="perPage"
        [currentPage]="currentPage"
        [total]="totalPages"
        (onSearch)="onSearch($event)"
        (onSort)="onSort($event)"
        (onPerPage)="perPageChanged($event)"
        (onCurrentPageChanged)="currentPageChanged($event)"
        (onSlideShowModeChanged)="slideShowModeChanged($event)"
      ></my-gallery-controls>
      <ul>
        <li *ngFor="let img of imagesToDisplay; let i = index" [ngClass]="{active: activeImg === i}">
          <my-gallery-image [image]="img"></my-gallery-image>
        </li>
        <img *ngIf="isSlideShow" src="{{imagesToDisplay[activeImg].url}}" class="active" default="http://placecorgi.com/600/600"/>
      </ul>
    </div>
  `,
  styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {
  // inputs
  @Input() images: any[];
  @Input('search') showSearch: boolean = true;
  @Input('pagination') showPagination: boolean = true;
  @Input('sorting') showSorting: boolean = true;
  @Input('per-page') 
  set perPageVal(_perPage: number) {
    this.perPage = _perPage;
  }
  @Input('transition-time') time: number;

  // public
  imagesToDisplay: any[];
  currentPage: number = 1;
  perPage: number = 10;
  totalPages: number ;
  isSlideShow: boolean = false;
  activeImg: number = 0;
  public paginateImages(images, perPage: number, currentPage, term = '', sortBy) {
    // filter logic    
    let filterCb = !term.trim() ? null : ({title}) => title.toLowerCase().includes(term.toLowerCase());
    let filtered = filterCb ?  images.filter(filterCb) : images;

    // sort logic  
    let sortCb = sortBy ? (a, b) => a[sortBy] > b[sortBy] ? 1: -1 : null;
    let sorted = sortCb ?  filtered.sort(sortCb) : filtered;

    // pagination logic
    let offset = (currentPage - 1) * perPage;
    let paginated = sorted.slice(offset, offset + +perPage);

    // calculate total pages
    this.totalPages = Math.floor(filtered.length / perPage);
    return paginated;
  } 

  // private
  private term = '';
  private sortBy;
  private interval;

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
    // should reset current page
    this.currentPage = 1;
    this.perPage = _perPage;
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy);
  } 

  currentPageChanged(_curPage) {
    this.currentPage = _curPage;
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy);
  }

  slideShowModeChanged(isSlideShow) {
    this.isSlideShow = isSlideShow;
    if (this.isSlideShow ) {
      
      this.interval = setInterval(() => {
        if ((this.imagesToDisplay.length - 1) === this.activeImg) {        
          this.currentPage = this.currentPage === this.totalPages ? 1 : this.currentPage + 1;
          this.activeImg = 0;
        } else {
          this.activeImg++; 
        }     
      }, this.time * 1000);
    } else {
      if (this.interval) {
        clearInterval(this.interval);
      }
    } 
  }

  // livecycle
  ngOnInit(): void {
    this.imagesToDisplay = this.paginateImages(this.images, this.perPage, this.currentPage, this.term, this.sortBy);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
