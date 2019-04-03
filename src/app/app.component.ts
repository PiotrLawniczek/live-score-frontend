import {Component, OnInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    this.loadIcons();
  }

  private loadIcons() {
    this._iconRegistry.addSvgIcon(
      'ARROW-RIGHT',
      this._sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-arrow_right-24px.svg'));
    this._iconRegistry.addSvgIcon(
      'ARROW-LEFT',
      this._sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-arrow_left-24px.svg'));
  }
}
