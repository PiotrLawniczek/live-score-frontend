import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  navLinks = [
    {
      label: 'Table',
      path: '/table'
    },
    {
      label: 'Timetable',
      path: '/timetable'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
