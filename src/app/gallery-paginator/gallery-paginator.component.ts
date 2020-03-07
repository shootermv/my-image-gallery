import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'gallery-paginator',
  template: `
     <button><</button>
     <span>page {{currentPage}} of {{total}}</span>
     <button>></button>
  `,
  styleUrls: ['./gallery-paginator.component.css']
})
export class GalleryPaginatorComponent implements OnInit {
  // inputs
  @Input() currentPage = 1;
  @Input() total = 3;

  // outputs
  // @Output()

  ngOnInit(): void {
  }

}
