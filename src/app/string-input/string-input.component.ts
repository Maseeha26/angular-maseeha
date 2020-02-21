import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.css']
})
export class StringInputComponent implements OnInit {
  public message = "Hello Code and Test World!";
  constructor() { }
  @Output() stringEmit = new EventEmitter()

  ngOnInit() {
    this.stringEmit.emit(this.message);
  }

  sendString(message: string) {
    this.stringEmit.emit(message);
  }
}