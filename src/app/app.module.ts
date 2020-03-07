import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { ImageComponent } from './image/image.component';
import { GalleryControlsComponent } from './gallery-controls/gallery-controls.component';
import { GalleryPaginatorComponent } from './gallery-paginator/gallery-paginator.component';
import { ImagePreloadDirective } from './image-preload.directive';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGalleryComponent,
    ImageComponent,
    GalleryControlsComponent,
    GalleryPaginatorComponent,
    ImagePreloadDirective,
    ToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
