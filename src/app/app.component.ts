import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
  height: number = 100;
  
  showMenu: boolean;

  constructor(public router: Router){}

  ngOnInit() {
    particlesJS.load('background', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
