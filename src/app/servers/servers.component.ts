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
  serverCreated = false;
  //41. Outputting Lists with ngFor 
  servers = [];

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
}
