import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  //37. Directives: Using ngIf to Output Data Conditionally
  serverCreated = false;

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }
  ngOnInit() {}

  onCreateServer() {
    //37. Directives: Using ngIf to Output Data Conditionally
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server created! The name is: ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
