import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyGalleryComponent } from './my-gallery.component';
import { ImageComponent } from './image/image.component';
import { GalleryControlsComponent } from './gallery-controls/gallery-controls.component';
import { GalleryPaginatorComponent } from './gallery-paginator/gallery-paginator.component';
import { ImagePreloadDirective } from './image-preload/image-preload.directive';
import { ToggleComponent } from './toggle/toggle.component';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

@NgModule({
  declarations: [
    MyGalleryComponent,
    ImageComponent,
    GalleryControlsComponent,
    GalleryPaginatorComponent,
    ImagePreloadDirective,
    ToggleComponent,
    GalleryDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MyGalleryComponent]
})
export class MyGalleryModule { }
