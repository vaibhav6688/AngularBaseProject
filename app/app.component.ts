import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
       <router-outlet></router-outlet>
       <a [routerLink]="['']">Home</a>
       <a [routerLink]="['/about']">About</a>

       
  `
})
export class AppComponent { }