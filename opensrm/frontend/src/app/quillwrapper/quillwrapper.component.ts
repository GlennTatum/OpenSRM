import { Component, inject, Input, OnInit } from '@angular/core';
import { QuillComponent } from '../quill/quill.component';
import { HttpClient } from '@angular/common/http';
import { User, UserRes, UserService } from '../user.service';
import { R } from '../backend';
import { ActivatedRoute } from '@angular/router';
import { Question, QuestionService } from '../question.service';

type MathRes = {
  answer: string
}

@Component({
  selector: 'app-quillwrapper',
  standalone: true,
  imports: [QuillComponent],
  templateUrl: './quillwrapper.component.html',
  styleUrl: './quillwrapper.component.css'
})
export class QuillwrapperComponent implements OnInit {

  @Input() text: string = ''
  @Input() imageURL: string = ''

  private userService = inject(UserService)
  private questionService = inject(QuestionService);

  points: number = 0;
  

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  @Input() expectedAnswer: number

  active_user = ''
  topics: string = ''

  math: number = -999

  current_topic: string = ''

  topicMap: Map<string, string> = new Map()

  current_mmr: number = 0;

  isCorrect = false;
  

  ngOnInit(): void {
    this.current_topic = this.route.snapshot.params['topic']

    this.userService.U().subscribe((v: UserRes) => {
      let user: User = JSON.parse(JSON.stringify(v["user"]))

      this.active_user = user.email;
      let t = JSON.parse(JSON.stringify(user.topics))
      let topics = JSON.parse(JSON.stringify(t));

      this.current_mmr = Number.parseInt(topics[this.current_topic])


    })
  }

  current = '' // current math expression in LaTeX

  handleMathUpdate(event: string): void {
      this.current = event


  }

  handleQuestionSubmit() {
    let exp = this.current
    let token = ''

    this.http.post<MathRes>(R(`evaluate/?expression=${encodeURIComponent(exp)}`), null).subscribe((value: MathRes) => {
      this.math = Math.trunc(Number.parseInt(value.answer))
      if(this.math.toString() === this.expectedAnswer.toString()) {
        this.isCorrect = true;
      } else {
        this.isCorrect = false;

      }
    })

    this.http.post(R(`login/${this.active_user}`), null).subscribe((value: Object) => {
      let res = JSON.parse(JSON.stringify(value))
      token = res.token

      if(this.isCorrect === false) {
        let sr = this.current_mmr - 100
        this.current_mmr = sr;

        this.http.put(R(`account/${token}?name=${this.current_topic}&mastery=${sr}`), null).subscribe((value: Object) => null)

      }
      if(this.isCorrect === true) {
        let sr = this.current_mmr + 100
        this.current_mmr = sr;

        this.http.put(R(`account/${token}?name=${this.current_topic}&mastery=${sr}`), null).subscribe((value: Object) => null)
      }


    })

  }
}
