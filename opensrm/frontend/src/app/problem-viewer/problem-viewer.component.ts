import { Component, inject, OnInit } from '@angular/core';
import { ProblemSetSidebarComponent } from '../problem-set-sidebar/problem-set-sidebar.component';
import { ActivatedRoute, Params } from '@angular/router';
import { QuillwrapperComponent } from "../quillwrapper/quillwrapper.component";
import { User, UserRes, UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { R } from '../backend';
import { QuestionRes, QuestionService } from '../question.service';

export type MathProblem = {
  _id: string,
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

  problemList: MathProblem[] = []

  problemId: string = ''
  currentProblem: MathProblem | null = null;
  select_topic = ''

  userService = inject(UserService);
  questionService = inject(QuestionService)

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {

    this.userService.U().subscribe((v: UserRes) => {
      let user: User = JSON.parse(JSON.stringify(v["user"]))

      this.select_topic = this.route.snapshot.params['topic']

      this.questionService.Q(this.route.snapshot.params['topic']).subscribe((v: QuestionRes) => {
        let problems = JSON.parse(JSON.stringify(v["question"]))
        this.problemList = problems
      })
    })

    this.problemId = this.route.snapshot.params['problemId'];
    this.problemList.find((value: MathProblem, index: number, obj: MathProblem[]) => {
      if(value._id === this.problemId) {
        this.currentProblem = value;
      }
    })
    this.select_topic = this.route.snapshot.params['topic']
  }

  public swapCurrent(r: string) {
    this.problemList.find((value: MathProblem, index: number, obj: MathProblem[]) => {
      if(value._id === r) {
        this.currentProblem = value;
      }
    })
  }
}        