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
  matched: string;
  constructor() { }

  getregexEmit(message: string) {
    this.receivedRegexMessage = message;
    console.log(message);
    this.getMatchedValue();
  }

  getstringEmit(message: string) {
    this.receivedStringMessage = message;
    console.log(message);
    this.getMatchedValue();
  }

  getMatchedValue() {
    try {
      if (this.receivedRegexMessage) {
         let params = this.receivedRegexMessage.split('/')
        let regex = new RegExp(params[1], params[2]);
        debugger;
        this.matched = this.receivedStringMessage.match(regex);
        if (regex.test(this.receivedStringMessage) && this.receivedRegexMessage) {
          this.isMatched = "Matched";
        } else {
          this.isMatched = "Not Matched";
        }
      }
    }
    catch (ex) {
      console.log(ex);
      this.isMatched = "Not Matched";
    }
  }
}
