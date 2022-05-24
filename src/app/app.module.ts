import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatLogsComponent } from './chat-logs/chat-logs.component';

@NgModule({
  declarations: [AppComponent, ChatInputComponent, ChatLogsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
