import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemViewerComponent } from './problem-viewer.component';

describe('ProblemViewerComponent', () => {
  let component: ProblemViewerComponent;
  let fixture: ComponentFixture<ProblemViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
