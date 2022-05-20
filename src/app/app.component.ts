import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'my-angular-app';
  newMemberName = '';
  members: string[] = [];

  saveNewMember(member: string) {
    this.newMemberName = member;
  }

  addMember() {
    this.members.push(this.newMemberName);
    console.log(this.members);
  }
}
