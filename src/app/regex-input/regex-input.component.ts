import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-regex-input',
  templateUrl: './regex-input.component.html',
  styleUrls: ['./regex-input.component.css']
})
export class RegexInputComponent implements OnInit {
  regexForm: FormGroup;
  inputPattern: any;
  constructor(private fb: FormBuilder) { }
  @Output() regexEmit = new EventEmitter();
  ngOnInit() {
    this.regexForm = this.fb.group({
      regexValue: ['', Validators.required]
    });
  }

  sendRegexString(message: string) {
    this.inputPattern = this.regexEmit.emit(message);
    console.log( this.inputPattern );
  }

}