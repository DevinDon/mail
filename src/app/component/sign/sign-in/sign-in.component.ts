import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  status: string;
  form: FormGroup;

  constructor(
    private former: FormBuilder,
    private router: Router,
    private user: UserService
  ) {
    this.form = former.group({
      name: former.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
      password: former.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)])
    });
  }

  ngOnInit() { }

  signIn() {
    this.status = 'loading';
    this.user.signIn({
      name: this.form.get('name').value,
      password: this.form.get('password').value
    }).subscribe({
      next: v => v.status ? this.router.navigateByUrl('/home') : this.form.setErrors({ notfound: true }),
      error: e => console.error(`Sign in error: ${e}`),
      complete: () => this.status = 'done'
    }).unsubscribe();
  }

}
