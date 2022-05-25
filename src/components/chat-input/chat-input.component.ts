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
  @Input() aChat: string;

  faUser = faUser;
  faComment = faComment;

  currentUsername = '';
  newMessage = '';
  errorMessage = '';

  saveUsername(username: string) {
    this.currentUsername = username;
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
    } else if (this.aChat) {
      this.messages.push({
        chat: 'A',
        username: this.currentUsername,
        message: this.newMessage,
      });
      this.newMessage = '';
    } else {
      this.messages.push({
        chat: 'B',
        username: this.currentUsername,
        message: this.newMessage,
      });
      this.newMessage = '';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
