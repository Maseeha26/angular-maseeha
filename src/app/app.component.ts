import { Component, Input } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  receivedRegexMessage: any;
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
      // let matched = this.receivedStringMessage.match(this.receivedRegexMessage);
      // alert(matched)
      while (
        (this.stringValue = this.receivedRegexMessage.exec(
          this.receivedStringMessage
        )) !== null
      ) {
        if (this.stringValue.index === this.receivedRegexMessage.lastIndex) {
          this.receivedRegexMessage.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        this.stringValue.forEach((match, groupIndex) => {
          console.log(`Found match, group ${groupIndex}: ${match}`);
        });
      }
      this.isMatched = "Matched";
    } catch (Exception) {
      this.isMatched = "Not Matched";
    }
  }
}
