import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // 40. Applying CSS Classes Dynamically with ngClass
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  //39. Styling Elements Dynamically with ngStyle: Aggiunto constructor
  constructor() {
    //39. Styling Elements Dynamically with ngStyle: valore random per simulare online ed offline del server
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
