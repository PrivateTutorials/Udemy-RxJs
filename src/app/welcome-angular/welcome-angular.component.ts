import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome-angular',
  templateUrl: './welcome-angular.component.html',
  styleUrls: ['./welcome-angular.component.scss']
})
export class WelcomeAngularComponent implements OnInit {
  title = 'Udemy-Reactive';

  constructor() { }

  ngOnInit(): void {
  }

}
