import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-dialog',
  template: `
    <dialog #dlg>
        <section >
          <button class="prev" [disabled]="imgToShow === 0" (click)="changeImg(imgToShow - 1)"><</button>
          <button class="next" [disabled]="imgToShow === images.length - 1" (click)="changeImg(imgToShow + 1)">></button>
          <img src="{{currimg?.url}}" default="http://placecorgi.com/600/600">
          <button class="closeBtn" value="default" (click)="dlgRef.nativeElement.close()">X</button>        
        </section>
        <footer >
          <div>{{currimg?.title}}</div>
        </footer>       
    </dialog>
  `,
  styles: [`
    section {
     height: 600px;
     width: 600px; 
     position: relative;
     display: flex;
     justify-content: center;
    }
    section button{position: absolute; top: 50%;}
    section button.prev{left: 5px;}
    section button.next{right: 5px;}
    section button.closeBtn{right: 5px;top: 5px;}
  `]
})
export class GalleryDialogComponent {
  @ViewChild('dlg') dlgRef: ElementRef;

  // inputs
  @Input() set imageToShow(idx) {
    this.imgToShow = idx;
    if (idx < 0 ) return;
    this.currimg = this.images[this.imgToShow];
    if (this.dlgRef && this.currimg) this.dlgRef.nativeElement.showModal();
  }
  @Input() images;
 
  // public 
  imgToShow;
  currimg;

  changeImg(idx) {
    this.imgToShow = idx;
    this.currimg = this.images[this.imgToShow]
  }
}
