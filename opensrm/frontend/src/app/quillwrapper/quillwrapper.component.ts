import { Component, Input } from '@angular/core';
import { QuillComponent } from '../quill/quill.component';

@Component({
  selector: 'app-quillwrapper',
  standalone: true,
  imports: [QuillComponent],
  templateUrl: './quillwrapper.component.html',
  styleUrl: './quillwrapper.component.css'
})
export class QuillwrapperComponent {

  @Input() question_text = ''

  current = '' // current math expression in LaTeX

  handleMathUpdate(event: string): void {
      this.current = event
  }

}
