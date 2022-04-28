/**
 * step 2
 * convert the notificationsCount property in
 * notifications-manager.component.ts to @Input(),
 * rename it to count, and replace its usages as
 * follows:
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  // notificationsCount = 0
  //step 2.1 - add @input()
  @Input() count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addNotification() {
    //step 2.1
    // this.notificationsCount++;
    this.count++;
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
  }

  resetCount() {
    this.notificationsCount = 0;
  }

}
