import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepae',
  templateUrl: './homepae.component.html',
  styleUrls: ['./homepae.component.scss']
})
export class HomepaeComponent implements OnInit {
  
  contacts!: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/contacts')
    .subscribe(res => this.contacts = res)
  }

}
