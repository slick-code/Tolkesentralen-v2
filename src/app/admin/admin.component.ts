import { Component } from '@angular/core';

@Component({
  selector: 'admin',
  template: `
            <div class="container body-content">
            <router-outlet ></router-outlet>
            </div>`
})

export class AdminComponent  { }