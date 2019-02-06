import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  username : String;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(username){
    console.log(username);
    this.router.navigate(['/userdetail'],username)
  }

}
