import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifBlockComponent } from './gif-block.component';

describe('GifBlockComponent', () => {
  let component: GifBlockComponent;
  let fixture: ComponentFixture<GifBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
