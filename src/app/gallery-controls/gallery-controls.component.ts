import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-gallery-controls',
  templateUrl: './gallery-controls.component.html',
  styleUrls: ['./gallery-controls.component.css']
})
export class GalleryControlsComponent implements OnInit {
  @Input() showSearch: boolean;
  @Input() showPagination: boolean;
  @Input() showSorting: boolean;
  
  @Output() onSort = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  search(e) {
    this.onSearch.emit(e.target.value);
  }

  sortBy(e) {
    this.onSort.emit(e.target.value);
  }
}
