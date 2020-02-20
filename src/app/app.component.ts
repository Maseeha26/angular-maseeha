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
  constructor() { }

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
    let matched = this.receivedStringMessage.match(this.receivedRegexMessage);
    alert(matched)
    this.isMatched = "Matched";
    }
    catch (Exception) {
      this.isMatched = "Not Matched";
    }  
  }
}
