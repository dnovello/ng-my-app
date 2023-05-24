import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }
  ngOnInit() {}
  //Naming convention: "on" before "CreateServer" mean an action (event) to do something
  onCreateServer() {
    this.serverCreationStatus = 'Server created!!';
  }
}
