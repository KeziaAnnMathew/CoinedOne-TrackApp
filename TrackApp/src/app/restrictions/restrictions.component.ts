import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restrictions',
  templateUrl: './restrictions.component.html',
  styleUrls: ['./restrictions.component.css']
})
export class RestrictionsComponent implements OnInit {
  work=true;
  constructor() { }

  ngOnInit(): void {
  }
  workTime(){
    this.work=true;
  }
  leisureTime(){
    this.work=false;
  }
}
