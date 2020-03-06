import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'my-gallery-image',
  template: `
    <img class="main" src="{{image.url}}"/>
    <div>{{image.title}}</div>
  `,
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: any;
  constructor() { }

  ngOnInit(): void {
  }

}
