import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit, AfterViewInit {
  @ViewChildren('checboxRef') checkboxRef: QueryList<ElementRef>;
  ngAfterViewInit() {}
  constructor() {}

  model = new Feedback('', '', '', '', '');
  tobeChecked = [false, false, false, false, false];
  userRating = [false, false, false, false, false];
  ngOnInit() {
    this.onSubmit();
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  rating(e) {
    console.log(e.target.name);
    this.checkboxRef.toArray().map((element, index, array) => {
      if (index <= e.target.value - 1) {
        return (element.nativeElement.checked = true);
      } else {
        return (element.nativeElement.checked = false);
      }
    });
  }
}
