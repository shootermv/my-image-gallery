import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'gallery-paginator',
  template: `
     <button (click)="onPageChanged.emit(currentPage - 1)" [disabled]="currentPage === 1"><</button>
     <span>page {{currentPage}} of {{total}}</span>
     <button (click)="onPageChanged.emit(currentPage + 1)" [disabled]="currentPage === total">></button>
  `,
  styles: [
    `
     button {
       cursor: pointer;
       margin: 2px;
     }
    `
  ]
})
export class GalleryPaginatorComponent implements OnInit {
  // inputs
  @Input() currentPage = 1;
  @Input() total = 3;

  // outputs
  @Output() onPageChanged = new EventEmitter();

  // lifecycle
  ngOnInit(): void {
  } 
  
}
