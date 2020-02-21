import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.css']
})
export class StringInputComponent implements OnInit {
  public message = "A regular expression is a sequence of characters that forms a search pattern."

  stringForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  @Output() stringEmit = new EventEmitter()

  ngOnInit() {
      this.stringForm = this.fb.group({
      stringValue: ['', Validators.required]
    });
    this.stringEmit.emit(this.message);
  }

  sendString(message: string) {
    this.stringEmit.emit(message);
  }
}