import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-logs',
  templateUrl: './chat-logs.component.html',
  styleUrls: ['./chat-logs.component.scss'],
})
export class ChatLogsComponent implements OnInit {
  @Input() messages: any[] = [];

  displayData() {
    console.log(this.messages[0].username);
  }

  constructor() {}

  ngOnInit(): void {}
}
