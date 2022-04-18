import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  title = 'ResetPassword-Login';
  public showMyMessage = false

  showMessageSoon() {
    this.showMyMessage = true
    setTimeout(() => {
      this.showMyMessage = false
    }, 3000)
  }

  goToResetPassword() {
    this.router.navigateByUrl('/reset-password');
  }
}
