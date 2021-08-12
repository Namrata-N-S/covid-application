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

  model = new Feedback('', '', '', 5, '');

  ngOnInit() {}

  submitted = false;
  onSubmit(form) {
    this.submitted = true;
    console.log(form.value);
  }
  rating(e) {
    this.checkboxRef.toArray().map((element, index, array) => {
      if (index <= e.target.value - 1) {
        this.model.rating = index + 1;
        return (element.nativeElement.checked = true);
      } else {
        return (element.nativeElement.checked = false);
      }
    });
  }
}
