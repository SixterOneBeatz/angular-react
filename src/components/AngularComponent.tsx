import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { ReactComponent } from "./ReactComponent";
@Component({
  selector: "app-react-embed",
  template: `<div>
    Hellow from angular, counter: {{ counter }} ${" "}
    <button (click)="triggerReset()">Reset from angular</button> <br />
    <br />
    <div id="react-root"></div>
  </div> `,
  styleUrls: ["./AngularComponent.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AngularComponent implements OnInit, OnChanges {
  @Input() counter: number = 0;
  @Output() onReset = new EventEmitter();
  @Output() onIncrement = new EventEmitter();
  @Output() onDecrement = new EventEmitter();

  ngOnChanges(): void {
    this.render();
  }
  ngOnInit(): void {
    this.render();
  }

  handleReset() {
    this.onReset.emit();
  }

  handleIncrement() {
    this.onIncrement.emit();
  }

  handleDecrement() {
    this.onDecrement.emit();
  }

  triggerReset() {
    this.onReset.emit();
  }

  private render() {
    let container = document.getElementById("react-root")!;
    let root = createRoot(container);
    root.render(
      <ReactComponent
        counter={this.counter}
        onReset={() => this.handleReset()}
        onDecrement={() => this.handleDecrement()}
        onIncrement={() => this.handleIncrement()}
      />
    );
  }
}
