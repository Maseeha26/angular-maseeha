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
  constructor() {}

  getregexEmit(message: string) {
    this.receivedRegexMessage = message;
    console.log(this.receivedRegexMessage);
    this.getMatchedValue();
  }

  getstringEmit(message: string) {
    this.receivedStringMessage = message;
    console.log(this.receivedStringMessage);
  }

  getMatchedValue() {
    debugger;
    try {
      let params = this.receivedRegexMessage.split('/')
      var regex = new RegExp(params[1], params[2]);
      let matched = this.receivedStringMessage.match(regex);
      console.log("matched " + matched);
      this.isMatched = matched;
    } catch (Exception) {
      this.isMatched = "Not Matched";
    }
  }
}
