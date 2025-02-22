import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MathProblem } from '../problem-viewer/problem-viewer.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-problem-set-sidebar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './problem-set-sidebar.component.html',
  styleUrl: './problem-set-sidebar.component.css'
})
export class ProblemSetSidebarComponent {

  @Output() swapQuestion = new EventEmitter<number>();

  @Input() problems: MathProblem[] = [];
  @Input() current_select: number | null = null;

  public handleRouteSwap(r: number) {
    this.swapQuestion.emit(r);
  }

}
