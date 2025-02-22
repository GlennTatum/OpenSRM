import { Component, Input } from '@angular/core';
import { QuillwrapperComponent } from '../quillwrapper/quillwrapper.component';

@Component({
  selector: 'app-math-problem',
  standalone: true,
  imports: [QuillwrapperComponent],
  templateUrl: './math-problem.component.html',
  styleUrl: './math-problem.component.css'
})
export class MathProblemComponent {
  @Input() math_question_id: number = -1
  @Input() math_question_text: string = ''
  @Input() math_question_image_url: string = ''
  @Input() math_question_answer: number = 0;
}
