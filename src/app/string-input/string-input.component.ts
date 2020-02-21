import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.css']
})
export class StringInputComponent implements OnInit {
  public message = "A regular expression is a sequence of characters that forms a search pattern."

  constructor() { }
  @Output() stringEmit = new EventEmitter()

  ngOnInit() {
    this.stringEmit.emit(this.message);
  }

  sendString(message: string) {
    this.stringEmit.emit(message);
  }
}