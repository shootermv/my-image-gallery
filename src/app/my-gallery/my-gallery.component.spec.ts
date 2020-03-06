import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGalleryComponent } from './my-gallery.component';
import { Component } from '@angular/core';
@Component({
  selector: 'my-gallery-controls',
  template: ''
})
class MockGalleryControlsComponent {}

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
});
