import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesWorkspaceDemoModule } from '../../../messages-workspace-demo/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MessagesWorkspaceDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
