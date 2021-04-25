import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ScheduleModel } from '../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class TrackScheduleService {
  readonly baseurl='http://localhost:3000';
  constructor(private http:HttpClient) { }

  getSchedules(){
    return this.http.get(this.baseurl+`/schedules/getschedules`)
  }
  updateSchedules(item:any){
    return this.http.put(this.baseurl+`/schedules/editschedules`,{"schedule":item})
    .subscribe(()=>{
    })
  }
  postSchedules(item:ScheduleModel){
    return this.http.post(this.baseurl+`/schedules/addschedules`,{"schedule":item})
    .subscribe(()=>{
    })
  }
  getApps(){
    return this.http.get(this.baseurl+`/apps/getapps`)
  }
  getApp(id:any){
    return this.http.get(this.baseurl+`/apps/getsingleapp/${id}`)
  }
  updateLimits(item:any){
    return this.http.put(this.baseurl+`/apps/updateLimits`,{"item":item})
    .subscribe(()=>{
    })
  }
  updateBlocked(item:any){
    return this.http.put(this.baseurl+`/apps/appblocked`,{"item":item})
    .subscribe(()=>{
    })
  }
  
}
