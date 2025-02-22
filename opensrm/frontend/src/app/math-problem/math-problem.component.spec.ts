import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathProblemComponent } from './math-problem.component';

describe('MathProblemComponent', () => {
  let component: MathProblemComponent;
  let fixture: ComponentFixture<MathProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathProblemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
