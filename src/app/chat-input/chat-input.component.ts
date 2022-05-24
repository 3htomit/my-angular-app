import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  @Input() messages = [{}];
  @Input() messagePackage: any;

  currentUsername = '';
  newMessage = '';

  errorMessage = '';

  saveUsername(username: string) {
    this.currentUsername = username;
    console.log(this.currentUsername);
  }

  saveNewMessage(message: string) {
    this.newMessage = message;
    if (message) {
      this.errorMessage = '';
    }
  }

  sendMessage() {
    if (!this.newMessage || !this.currentUsername) {
      this.errorMessage = 'Please fill in the inputs.';
    } else {
      this.messagePackage.username = this.currentUsername;
      this.messagePackage.message = this.newMessage;
      this.messages.push(this.messagePackage);
      this.newMessage = '';
      console.log(this.messagePackage);
      console.log(this.messages);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
