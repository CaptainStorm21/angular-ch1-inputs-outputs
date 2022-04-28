/**
 * step 1
 * We'll move the notificationsCount variable
 * from NotificationsManagerComponent and host
 * it in AppComponent. To do so, just create
 * a notificationsCount property in app.component.ts:
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notificationsCount = 10;
  updateNotificationsCount(count: number) {
    this.notificationsCount = count;
  }
}
