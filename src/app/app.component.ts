import { Component, Input } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  receivedRegexMessage: string;
  receivedStringMessage: any;
  isMatched: string;
  stringValue: any;
  matched: string;
  constructor() { }

  getregexEmit(message: string) {
    this.receivedRegexMessage = message;
    this.getMatchedValue();
  }

  getstringEmit(message: string) {
    this.receivedStringMessage = message;
    this.getMatchedValue();
  }

  getMatchedValue() {
    if (this.receivedRegexMessage) {
      let params = this.receivedRegexMessage.split('/')
      let regex = new RegExp(params[1], params[2]);
      this.matched = this.receivedStringMessage.match(regex);
      if (this.matched) {
        this.isMatched = "Matched";
      } else {
        this.isMatched = "Not Matched";
      }
    }

  }
}
