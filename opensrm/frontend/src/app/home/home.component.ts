import { AfterViewInit, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MathfieldElement, Mathfield } from 'mathlive';
import { QuillwrapperComponent } from '../quillwrapper/quillwrapper.component';
import { QuillComponent } from "../quill/quill.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
