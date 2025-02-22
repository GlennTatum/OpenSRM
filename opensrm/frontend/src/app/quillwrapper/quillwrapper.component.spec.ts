import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillwrapperComponent } from './quillwrapper.component';

describe('QuillwrapperComponent', () => {
  let component: QuillwrapperComponent;
  let fixture: ComponentFixture<QuillwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuillwrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuillwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
