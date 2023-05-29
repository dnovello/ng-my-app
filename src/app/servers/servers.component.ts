import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css'],
  styles: [
    `
      .whiteText {
        color: white;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  //41. Outputting Lists with ngFor
  servers = [];

  //42.Alt Challenge -> *ngFor full syntax <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
  toggleIsTrue = false;
  timestampEntries: Array<number> = [];

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }
  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server created! The name is: ' + this.serverName;
    //41. Outputting Lists with ngFor
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  //42.Alt Challenge -> *ngFor full syntax <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
  action() {
    this.toggleIsTrue = !this.toggleIsTrue;
    this.timestampEntries.push(Date.now());
    console.log(this.timestampEntries);
  }
}
