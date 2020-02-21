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
  constructor() { }

  getregexEmit(message: string) {
    this.receivedRegexMessage = message;
    console.log(this.receivedRegexMessage);
    this.getMatchedValue();
  }

  getstringEmit(message: string) {
    this.receivedStringMessage = message;
    console.log(this.receivedStringMessage);
    this.getMatchedValue();
  }

  getMatchedValue() {
    debugger;
    if (this.receivedRegexMessage) {
      let params = this.receivedRegexMessage.split('/')
      var regex = new RegExp(params[1], params[2]);
      let matched = this.receivedStringMessage.match(regex);
      console.log(regex.test(this.receivedStringMessage))
      if (regex.test(this.receivedStringMessage)) {
        this.isMatched = "Matched";
      } else {
        this.isMatched = "Not Matched";
      }
    }

  }
}
