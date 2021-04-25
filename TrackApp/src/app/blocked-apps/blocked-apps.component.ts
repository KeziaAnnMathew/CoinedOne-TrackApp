import { Component, OnInit } from '@angular/core';
import { AppModel } from 'src/models/app.model';
import { TrackScheduleService } from '../track-schedule.service';

@Component({
  selector: 'app-blocked-apps',
  templateUrl: './blocked-apps.component.html',
  styleUrls: ['./blocked-apps.component.css']
})
export class BlockedAppsComponent implements OnInit {
  apps:AppModel | any
  appsblocked:any;
  constructor(private service:TrackScheduleService) { }

  ngOnInit(): void {
    this.service.getApps()
    .subscribe((data)=>{
      this.apps=JSON.parse(JSON.stringify(data));
      this.appsblocked=this.apps;
    })
  }
  toggle(event:any,app:any){
    if(event.checked){
      app.blocked=true;
    }
    else{
      app.blocked=false;
    }
    this.service.updateBlocked(app);
  }
}
