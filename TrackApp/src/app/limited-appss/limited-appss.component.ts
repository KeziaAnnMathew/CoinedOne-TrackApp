import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModel } from 'src/models/app.model';
import { TrackScheduleService } from '../track-schedule.service';

@Component({
  selector: 'app-limited-appss',
  templateUrl: './limited-appss.component.html',
  styleUrls: ['./limited-appss.component.css']
})
export class LimitedAppssComponent implements OnInit {

  apps:AppModel | any
  constructor(private service:TrackScheduleService,private router:Router) { }

  ngOnInit(): void {
    this.service.getApps()
    .subscribe((data)=>{
      this.apps=JSON.parse(JSON.stringify(data));
    })
  }
  setLimits(app:any){
    this.router.navigate([`restrictions/limitedapps/setlimits/${app._id}`])
  }
}
