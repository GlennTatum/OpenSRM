import { Component, Input } from '@angular/core';
import { MathProblem } from '../problem-viewer/problem-viewer.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-problem-set-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './problem-set-sidebar.component.html',
  styleUrl: './problem-set-sidebar.component.css'
})
export class ProblemSetSidebarComponent {
  @Input() problems: MathProblem[] = [];
  @Input() current_select: number = -1;

}
