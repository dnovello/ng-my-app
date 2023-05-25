import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  //34. Combining all forms of Databinding: clear default value
  serverName = '';

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }
  ngOnInit() {}

  //34. Combining all forms of Databinding: concatenate with serverName value come from "[(ngModel)]" template directive.
  onCreateServer() {
    this.serverCreationStatus =
      'Server created! The name is: ' + this.serverName;
  }
  //31.Passing and Using Data with Event Binding
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
