import { Component, OnInit, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  @Input() messages: object[] = [];

  faUser = faUser;
  faComment = faComment;

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
      this.messages.push({
        username: this.currentUsername,
        message: this.newMessage,
      });
      this.newMessage = '';
      console.log(this.messages[this.messages.length - 1]);
      console.log(this.messages);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
