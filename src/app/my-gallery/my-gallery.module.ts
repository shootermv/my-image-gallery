import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MyGalleryComponent } from './my-gallery.component';
import { ImageComponent } from './gallery-image/image.component';
import { GalleryControlsComponent } from './gallery-controls/gallery-controls.component';
import { GalleryPaginatorComponent } from './gallery-paginator/gallery-paginator.component';
import { ImagePreloadDirective } from './image-preload/image-preload.directive';
import { ToggleComponent } from './gallery-toggle/toggle.component';
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
    HttpClientModule,
    CommonModule
  ],
  exports:[MyGalleryComponent]
})
export class MyGalleryModule { }
