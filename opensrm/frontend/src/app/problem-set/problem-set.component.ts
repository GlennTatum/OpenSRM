import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { User, UserRes, UserService } from '../user.service';
import { Question, QuestionService } from '../question.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QuillwrapperComponent } from '../quillwrapper/quillwrapper.component';

@Component({
  selector: 'app-problem-set',
  standalone: true,
  imports: [
    QuillwrapperComponent, 
    RouterLink
  ],
  templateUrl: './problem-set.component.html',
  styleUrl: './problem-set.component.css'
})
export class ProblemSetComponent implements OnInit {

  private userService = inject(UserService);
  private questionService = inject(QuestionService);

  active_user = ''
  questions: Question[] = []
  current_select: Question

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.userService.U().subscribe((v: UserRes) => {
        let user: User = JSON.parse(JSON.stringify(v["user"]))

        this.active_user = user.email;

      })

      this.questionService.Q(this.route.snapshot.params['topic']).subscribe((v: Object) => {
        this.questions = JSON.parse(JSON.stringify(v))

        this.current_select = this.questions[0]
      })
  }

  public handleSwap(id: string) {
    this.questions.find((value: Question, index: number, obj: Question[]) => {
      if(id === value._id) {
        this.current_select = value;
      }
    })
  }



}
