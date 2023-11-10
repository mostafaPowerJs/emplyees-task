import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginModel } from '../DTO/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  userObj: LoginModel = {
    "userName": "mostafahendy34@gmail.com",
    "password": "123"
  };

  constructor(private router: Router, private route: ActivatedRoute, private _FormBuilder: FormBuilder,) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.initiate()
  }

  initiate() {
    this.loginForm = this._FormBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLoggedin() {
    this.router.navigate([this.returnUrl]);
  }

  onSubmit() {
    if (this.userObj.password == this.loginForm.value.password && this.userObj.userName == this.loginForm.value.userName) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'login is success',
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        this.onLoggedin()
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

}
