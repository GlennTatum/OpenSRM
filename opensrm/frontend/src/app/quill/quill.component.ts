import { AfterViewInit, Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MathfieldElement } from 'mathlive';

@Component({
  selector: 'app-quill',
  standalone: true,
  imports: [],
  templateUrl: './quill.component.html',
  styleUrl: './quill.component.css'
})
export class QuillComponent implements AfterViewInit {
  @Output() mathEvent = new EventEmitter<string>();

  current = ''

  ngAfterViewInit(): void {
    let mfe = new MathfieldElement();

    // Set initial value and options
    mfe.value = "\\frac{\\sin(x)}{\\cos(x)}";

    // Attach the element to the DOM
    let mathLiveDiv = document.getElementById("mathLive");
    mathLiveDiv.appendChild(mfe);

    mathLiveDiv.addEventListener("input",(ev) => {
      // this.current = mfe.value
      this.mathEvent.emit(mfe.value);
    
    });

  }
}
