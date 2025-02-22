import { Component, Input, OnInit } from '@angular/core';
import { QuillComponent } from '../quill/quill.component';
import { MathProblem } from '../problem-viewer/problem-viewer.component';

@Component({
  selector: 'app-quillwrapper',
  standalone: true,
  imports: [QuillComponent],
  templateUrl: './quillwrapper.component.html',
  styleUrl: './quillwrapper.component.css'
})
export class QuillwrapperComponent {

  @Input() problem: MathProblem;

  current = '' // current math expression in LaTeX

  handleMathUpdate(event: string): void {
      this.current = event
  }

}
