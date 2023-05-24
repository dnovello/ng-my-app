import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // Selector by Tag
  //selector: '[app-servers]', //Selector by property -> attribute into tags eg.
  //selector: '.app-servers', // Selector by Class... n.b. isn't supported by ID or others )
  // template: `<h1>Titolo di prova</h1><app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }
  ngOnInit() {}
}
