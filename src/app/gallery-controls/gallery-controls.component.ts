import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-gallery-controls',
  templateUrl: './gallery-controls.component.html',
  styleUrls: ['./gallery-controls.component.css']
})
export class GalleryControlsComponent implements OnInit {
  @Input() showSearch: boolean;
  @Input() showPagination: boolean;
  @Input() showSorting: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
