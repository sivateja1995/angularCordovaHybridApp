import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // functions
  openInApp() {
    if (window.cordova) {
      cordova.InAppBrowser.open('https://www.google.com', '_blank');
    } else {
      window.open('https://www.google.com', '_system');
    }
  }
  openExternal() {
    if (window.cordova) {
      cordova.InAppBrowser.open('https://www.google.com', '_system');
    } else {
      window.open('https://www.google.com', '_system');
    }
  }
}
