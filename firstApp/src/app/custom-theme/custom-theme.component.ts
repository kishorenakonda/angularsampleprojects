import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { elementStyleProp } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-custom-theme',
  templateUrl: './custom-theme.component.html',
  styleUrls: ['./custom-theme.component.scss']
})
export class CustomThemeComponent implements OnInit {

  otherTheme: Boolean = true;
  constructor(private overlay: OverlayContainer) { }

  ngOnInit() {
  }

  toggleTheme() {
    console.log("clicked");
    this.otherTheme = !this.otherTheme;
  }


  toggleThemeClass() {
    if (this.otherTheme) {
      return "custom body";
    }
    else {
      return "alternative";
    }
  }
}
