import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGalleryComponent } from './my-gallery.component';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-gallery-controls',
  template: ''
})
class MockGalleryControlsComponent {
  @Input() showPagination;
  @Input() showSorting;
  @Input() perPage;
  @Input() currentPage;
  @Input() showSearch;
  @Input() total;
}

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

  it('paginateImages method - should 20 is perPage set to 20', () => {
    let images = new Array(20).fill({}), perPage = 20, currentPage = 1, term = '', sortBy = null;
    let paginated  = component.paginateImages(images, perPage, currentPage, term, sortBy);
    expect(paginated.length).toBe(20);
  });

  it('paginateImages method - should show 5 images when perPage set to 5 ', () => {
    let images = new Array(20).fill({}), perPage = 5, currentPage = 1, term = '', sortBy = null;
    expect(component.paginateImages(images, perPage, currentPage, term, sortBy).length).toBe(5);
  }); 
  
  it('paginateImages method - should show 5 images when perPage set to 5 and currPage is  2', () => {
    let images = new Array(20).fill({}), perPage = 5, currentPage = 2, term = '', sortBy = null;
    let paginated  = component.paginateImages(images, perPage, currentPage, term, sortBy);
    expect(paginated.length).toBe(5);
  
  });
  
  it('paginateImages method - if currPage is 2 and perPage is 5 - the first item should have index 5', () => {
    let images = new Array(20).fill({}), perPage = 5, currentPage = 2, term = '', sortBy = null;
    images = images.map((item, idx) => ({id: idx}));
    let paginated  = component.paginateImages(images, perPage, currentPage, term, sortBy);
    expect(paginated.length).toBe(5);
    expect(paginated[0].id).toBe(5);
  });

  it('paginateImages method filtering - if perPage is 5 - should show 2 if after filtering is 2', () => {
    let images = new Array(20).fill({}), perPage = 5, currentPage = 1, term = 'a', sortBy = null;
    images = images.map((item, idx) => ({id: idx, title: [18, 19].includes(idx) ? 'a' : 'z'}));
    let paginated  = component.paginateImages(images, perPage, currentPage, term, sortBy);

    expect(paginated.length).toBe(2);
  });

  it('paginateImages method sorting - ordered correctly by title', () => {
    let images = new Array(5).fill({}), perPage = 5, currentPage = 1, term = '', sortBy = 'title';
    images = images.map((item, idx) => ({id: idx, title: [0, 1, 2].includes(idx) ? 'b' : 'a'}));
    let paginated  = component.paginateImages(images, perPage, currentPage, term, sortBy);

    expect(paginated[0].title).toBe('a'); 
    expect(paginated[4].title).toBe('b');
  }); 
});
