import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPaginatorComponent } from './gallery-paginator.component';

describe('GalleryPaginatorComponent', () => {
  let component: GalleryPaginatorComponent;
  let fixture: ComponentFixture<GalleryPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
