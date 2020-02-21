import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.css']
})
export class StringInputComponent implements OnInit {

  stringForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  @Output() stringEmit = new EventEmitter()

  ngOnInit() {
      this.stringForm = this.fb.group({
      stringValue: ['', Validators.required]
    });
  }

  sendString(message: string) {
    this.stringEmit.emit(message);
  }
}