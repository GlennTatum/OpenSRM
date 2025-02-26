import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSetComponent } from './problem-set.component';

describe('ProblemSetComponent', () => {
  let component: ProblemSetComponent;
  let fixture: ComponentFixture<ProblemSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
