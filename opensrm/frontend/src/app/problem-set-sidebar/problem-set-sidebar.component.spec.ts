import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSetSidebarComponent } from './problem-set-sidebar.component';

describe('ProblemSetSidebarComponent', () => {
  let component: ProblemSetSidebarComponent;
  let fixture: ComponentFixture<ProblemSetSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemSetSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSetSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
