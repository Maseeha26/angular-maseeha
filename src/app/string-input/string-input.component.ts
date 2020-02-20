import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.css']
})
export class StringInputComponent implements OnInit {

  constructor() { }
  @Output() stringEmit = new EventEmitter()
  ngOnInit() {
  }

  sendString(message: string) {
   this.stringEmit.emit(message);
  }
}