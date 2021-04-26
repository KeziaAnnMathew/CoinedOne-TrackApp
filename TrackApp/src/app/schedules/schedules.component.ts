import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleModel } from '../../models/schedule.model';
import { TrackScheduleService } from '../track-schedule.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedules:ScheduleModel[] | any;
  constructor(private router:Router,private service:TrackScheduleService) { }

  ngOnInit(): void {
    // fetch existing schedules from db
    this.service.getSchedules()
    .subscribe((data)=>{
      this.schedules=JSON.parse(JSON.stringify(data));
      console.log(this.schedules)
    })
    
  }

  addSchedule(){
    this.router.navigate(['schedules/add']);
  }
}
