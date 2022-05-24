import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  messages = [
    // { username: 'Tim', message: 'Test' },
    // { username: 'Tom', message: 'Working ?' },
  ];
  messagePackage = { username: '', message: '' };
}
