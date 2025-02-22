import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MathfieldElement, Mathfield } from 'mathlive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  current = ''

  ngAfterViewInit(): void {
    let mfe = new MathfieldElement();

    // Set initial value and options
    mfe.value = "\\frac{\\sin(x)}{\\cos(x)}";

    // Attach the element to the DOM
    let mathLiveDiv = document.getElementById("mathLive");
    mathLiveDiv.appendChild(mfe);

    mathLiveDiv.addEventListener("input",(ev) => this.current = mfe.value);

  }

}
