import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGalleryComponent } from './my-gallery.component';
import { Component, Output } from '@angular/core';
@Component({
  selector: 'my-gallery-controls',
  template: ''
})
class MockGalleryControlsComponent {@Output() showPagination; @Output() showSorting; @Output() perPage;}

describe('MyGalleryComponent', () => {
  let component: MyGalleryComponent;
  let fixture: ComponentFixture<MyGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGalleryComponent, MockGalleryControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGalleryComponent);
    component = fixture.componentInstance;
    component.images = []
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('paginateImages method - should show 5 images when perpage set to 5 ', () => {
    let images = new Array(20).fill({}), perPage = 5, currentPage = 1, term = '', sortBy = null;
    expect(component.paginateImages(images, perPage, currentPage, term = '', sortBy).length).toBe(5);
  }); 
  
  it('paginateImages method - should show 5 images when perpage set to 5 and currPage is  2', () => {
    let images = new Array(20).fill({}), perPage = 5, currentPage = 2, term = '', sortBy = null;
    expect(component.paginateImages(images, perPage, currentPage, term = '', sortBy).length).toBe(5);
  });   
});
