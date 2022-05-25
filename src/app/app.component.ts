import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  messages: object[] = [
    { chat: 'A', username: 'Tim', message: 'Hi there!' },
    { chat: 'B', username: 'Mike', message: "What's up?" },
    { chat: 'A', username: 'Tim', message: "I'm great!" },
  ];
  aChat = 'A';
  bChat = 'B';
}
