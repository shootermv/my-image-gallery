import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-gallery-controls',
  templateUrl: './gallery-controls.component.html',
  styleUrls: ['./gallery-controls.component.css']
})
export class GalleryControlsComponent implements OnInit {
  // inputs
  @Input() showSearch: boolean;
  @Input() showPagination: boolean;
  @Input() showSorting: boolean;
  @Input() perPage;
  @Input() currentPage;
  @Input() total;

  // outputs
  @Output() onSort = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  @Output() onPerPage = new EventEmitter();
  @Output() onCurrentPageChanged = new EventEmitter(); 
  
  // lifecycle
  ngOnInit(): void {
  }

  // handlers
  search(e) {
    this.onSearch.emit(e.target.value);
  }

  sortBy(e) {
    this.onSort.emit(e.target.value);
  }

  perPageChanged(e) {
    this.onPerPage.emit(e.target.value);
  }

  currentPageChanged(page) {
    this.onCurrentPageChanged.emit(page);
  }
}
