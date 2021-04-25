import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleModel } from '../../models/schedule.model';
import { TrackScheduleService } from '../track-schedule.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  addForm:FormGroup | any;
  days=[
    {
      day:"Monday",
      set:false
    },
    {
      day:"tuesday",
      set:false
    },
    {
      day:"wednesday",
      set:false
    },
    {
      day:"thursday",
      set:false
    },
    {
      day:"friday",
      set:false
    },
    {
      day:"Saturday",
      set:false
    },
    {
      day:"Sunday",
      set:false
    }
  ]
  scheduleItem=new ScheduleModel(this.days,'','');
  constructor(private service:TrackScheduleService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.addForm =this.formBuilder.group({
      // 'days':[this.scheduleItem.days],
      'fromTime':[this.scheduleItem.fromTime],
      'toTime':[this.scheduleItem.toTime],
    })
  }
  addSchedule(){
    this.service.postSchedules(this.scheduleItem);
    this.router.navigate([`/schedules`])
  }
  onCheckboxChange(event:any,i:any){
    if(event.target.checked){
      this.days[i].set=true
    }
    else{
      this.days[i].set=false;
    }
  }
}
