import {Component, OnInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private facebookService: FacebookService) {

  }
  ngOnInit() {
    this.loadIcons();
    this.initFacebookService();
  }

  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v3.2' };
    this.facebookService.init(initParams);
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
