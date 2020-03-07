import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'my-gallery-image',
  template: `
    <img class="main" src="{{image.url}}" 
    default="http://placecorgi.com/600/600"/>
    <div>{{image.title}}</div>
    <div>{{image.date}}</div>
  `,
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
