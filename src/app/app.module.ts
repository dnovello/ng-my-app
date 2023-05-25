import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//34. Challenge: Practicing Databinding. To run [(ngModel)] I need to import "FormsModule" and import below into array "imports"
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
  ],
  //34. Challenge: Practicing Databinding. Add to imports array "FormModule" first to use it.
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
