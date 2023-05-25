import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //34. Challenge: Practicing Databinding
  username = '';

  //Il tutor ha usato un'espressione direttamente applicata all'evento:
  //(click)="username = ''"
  //anzichè
  onResetUsername() {
    this.username = '';
  }
}
