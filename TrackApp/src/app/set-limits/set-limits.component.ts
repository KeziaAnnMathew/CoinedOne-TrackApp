import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModel } from 'src/models/app.model';
import { TrackScheduleService } from '../track-schedule.service';

@Component({
  selector: 'app-set-limits',
  templateUrl: './set-limits.component.html',
  styleUrls: ['./set-limits.component.css']
})
export class SetLimitsComponent implements OnInit {
  id:any;
  appdetails:AppModel | any="";
  weekdays=true;
  constructor(private service:TrackScheduleService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number   
      this.getApp(this.id) 
    });
  }
  formatLabel(value: number) {
    return value+ 'h'
  }
  getApp(id:any){
    this.service.getApp(id)
    .subscribe((app)=>{
      console.log(app)
      this.appdetails=app;
    })
  }
  viewWeekdays(){
    this.weekdays=true;
  }
  viewWeekends(){
    this.weekdays=false;
  }
  updateLimits(){
    if(this.appdetails.limitWeekdays==0 && this.appdetails.limitWeekend==0){
      this.appdetails.limited=false;
    }
    else{
      this.appdetails.limited=true;
    }
    this.service.updateLimits(this.appdetails);
    this.router.navigate([`/restrictions`])
  }
}
