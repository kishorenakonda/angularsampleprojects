import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  username: String;
  showage: Boolean = true;
  voteAccepted: Boolean = false;
  showdata: Boolean;
  age: Number;

  constructor(private router: ActivatedRoute) {
    this.username =  this.router.snapshot.params["name"]; 
    console.log(this.username);
  }

  ngOnInit() {

  }

  checkVote(age) {
    console.log(age);
    if (age > 18) {
      this.voteAccepted = !this.voteAccepted;
      this.showdata = !this.showdata;
      this.showage = !this.showage;
    }
    else {
      this.showage = !this.showage;
    }
  }

}
