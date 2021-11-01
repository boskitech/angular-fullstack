import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

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
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitForm(){
    this.http.post('http://localhost:3000/api/login', this.signupForm.value, {withCredentials:true})
      .subscribe((res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home'])
      })
  }

}
