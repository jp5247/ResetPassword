import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ResetPassword';
  public showMyMessage = false

  showMessageSoon() {
    this.showMyMessage = true
    setTimeout(() => {
      this.showMyMessage = false
    }, 3000)
  }
}
