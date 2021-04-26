import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restrictions',
  templateUrl: './restrictions.component.html',
  styleUrls: ['./restrictions.component.css']
})
export class RestrictionsComponent implements OnInit {
  work=true;
  constructor() { }
  workBtn="active";
  nonWorkBtn="non-active"
  ngOnInit(): void {
  }
  workTime(){
    this.work=true;
    this.workBtn="active";
    this.nonWorkBtn="non-active";
  }
  leisureTime(){
    this.work=false;
    this.workBtn="non-active";
    this.nonWorkBtn="active";
  }
}
