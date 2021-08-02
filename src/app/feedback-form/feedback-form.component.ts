import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  constructor() {}

  model = new Feedback('', '', '', '', '');

  ngOnInit() {
    this.onSubmit();
    print();
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    alert('hi');
  }
}
