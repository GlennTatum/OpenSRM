import { Component, OnInit } from '@angular/core';
import { ProblemSetSidebarComponent } from '../problem-set-sidebar/problem-set-sidebar.component';
import { ActivatedRoute, Params } from '@angular/router';
import { QuillwrapperComponent } from "../quillwrapper/quillwrapper.component";

export type MathProblem = {
  math_question_id: number,
  math_question_text: string,
  math_question_image_url: string,
  math_question_answer: number,
}

@Component({
  selector: 'app-problem-viewer',
  standalone: true,
  imports: [ProblemSetSidebarComponent, QuillwrapperComponent],
  templateUrl: './problem-viewer.component.html',
  styleUrl: './problem-viewer.component.css'
})
export class ProblemViewerComponent implements OnInit {

  // TODO fetch problems from API on constructor given url out of a problem set
  public readonly testProblemList: MathProblem[] = [
    {
      math_question_id: 1,
      math_question_text: 'what is 1+1?',
      math_question_image_url: '',
      math_question_answer: 2
    },
    {
      math_question_id: 2,
      math_question_text: 'what is 2+1?',
      math_question_image_url: '',
      math_question_answer: 3
    }
  ]

  problemId: number = 0
  currentProblem: MathProblem | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.problemId = Number.parseInt(this.route.snapshot.params['problemId']);
    this.testProblemList.find((value: MathProblem, index: number, obj: MathProblem[]) => {
      if(value.math_question_id === this.problemId) {
        this.currentProblem = value;
      }
    })
  }

  current_new = 0;

  public swapCurrent(r: number) {
    this.testProblemList.find((value: MathProblem, index: number, obj: MathProblem[]) => {
      if(value.math_question_id === r) {
        this.currentProblem = value;
      }
    })
  }
}        