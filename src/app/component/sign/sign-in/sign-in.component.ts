import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit() { }

  signIn() {
    this.user.signIn({ id: 123456 });
    if (this.user.isSignIn()) {
      this.router.navigate(['/']);
    }
  }

}
