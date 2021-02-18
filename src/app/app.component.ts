import { Component, VERSION } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  tabs = ["First", "Second", "Third"];
  selected = new FormControl(0);
  goToTabindex() {
    this.selected = new FormControl(2);
  }
  // addTab(selectAfterAdding: boolean) {
  //   this.tabs.push("New");

  //   if (selectAfterAdding) {
  //     this.selected.setValue(this.tabs.length - 1);
  //   }
  // }

  // removeTab(index: number) {
  //   this.tabs.splice(index, 1);
  // }
}
