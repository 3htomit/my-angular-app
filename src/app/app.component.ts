import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  messages: object[] = [];
  aChat = 'A';

  clearChat() {
    localStorage.clear();
    window.location.reload();
  }
}
