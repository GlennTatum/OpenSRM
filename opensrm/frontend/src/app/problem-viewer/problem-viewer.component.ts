import { Component, OnInit } from '@angular/core';
import { ProblemSetSidebarComponent } from '../problem-set-sidebar/problem-set-sidebar.component';
import { MathProblemComponent } from '../math-problem/math-problem.component';
import { ActivatedRoute } from '@angular/router';

export type MathProblem = {
  math_question_id: number,
  math_question_text: string,
  math_question_image_url: string,
  math_question_answer: number,
}

@Component({
  selector: 'app-problem-viewer',
  standalone: true,
  imports: [ProblemSetSidebarComponent, MathProblemComponent],
  templateUrl: './problem-viewer.component.html',
  styleUrl: './problem-viewer.component.css'
})
export class ProblemViewerComponent implements OnInit {

  public readonly testProblemList: MathProblem[] = [
    {
      math_question_id: 1,
      math_question_text: 'what is 1+1?',
      math_question_image_url: '',
      math_question_answer: 2
    }
  ]

  problemId: number = 0
  currentProblem: MathProblem | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activatedRoute.queryParamMap.subscribe(params => {
        let url_param =  params.get('problemId');
        let pId = url_param != null ? Number.parseInt(url_param.valueOf()) : -1;
        this.problemId = pId;

        this.testProblemList.find((value: MathProblem, index: number, obj: MathProblem[]) => {
          if(value.math_question_id === pId) {
              this.currentProblem = value;
          }
        })
      })
  }

}
