import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { 

    }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitForm(){
    this.http.post('http://localhost:3000/api/login', this.signinForm.value, {withCredentials:true})
      .subscribe((res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home'])
      })
  }

}