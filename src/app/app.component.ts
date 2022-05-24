import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  messages: object[] = [{username: "Tim", message: "Hi there!"}, {username: "Mike", message: "What's up?"}];
}
