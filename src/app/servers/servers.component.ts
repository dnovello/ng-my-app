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

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }
  ngOnInit() {}
  //Naming convention: "on" before "CreateServer" mean an action (event) to do something
  onCreateServer() {
    this.serverCreationStatus = 'Server created!!';
  }
  onUpdateServerName(event: Event) {
    console.log(event); //Eg. se scrivo "test" nel campo input, nella console cercando all'interno di uno qualsiasi degli eventi e sotto la voce InputEvent{}/target:/ troverò il valore inserito value:"test". Grazie a questo dato possiamo impostare unanuova properyy serverName = '' (sopra) quindi preleviamo il dato dal dOM con questa sintassi: (<HTMLInputElement>event.target) ed aggiungendo il dato "value" dall'oggetto InputEvent
    this.serverName = (<HTMLInputElement>event.target).value; //si usa "event" in quanto è la variabile riservata ($event) presente nel DOM
  }
}
