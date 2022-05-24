import {
  Component,
  OnInit,
  Input,
  AfterViewChecked,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chat-logs',
  templateUrl: './chat-logs.component.html',
  styleUrls: ['./chat-logs.component.scss'],
})
export class ChatLogsComponent implements OnInit, AfterViewChecked {
  @Input() messages: any[] = [];
  @ViewChild('scrollBottom') private scrollBottom: ElementRef;

  displayData() {
    console.log(this.messages[0].username);
  }

  constructor() {}

  ngOnInit(): void {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollBottom.nativeElement.scrollTop =
        this.scrollBottom.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
