import { Component, Input, Output,EventEmitter } from '@angular/core'
import { IEvent } from './shared/index';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
      <h2 [ngStyle]="getNameStyle()"> {{event?.name}}</h2>
      <div [ngClass]="getDateCalss()" >Date: {{event?.date}}</div>
      <div [ngSwitch]="event?.time" >
      Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'9:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        online Url: {{event.onlineUrl}}
      </div>
      <!--<button class="btn btn-primary" (click)="handleClickMe()">Click me</button>-->
    </div>
  `,
  styles: [`
    .green {color:#80fb80 !important;}
    .bold {font-weight:bold;}
    .thumbnail {min-height:210px}
    .thumbnail {min-height:210px}
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event:IEvent
  @Output() eventClick = new EventEmitter()
  handleClickMe(){
    this.eventClick.emit(this.event.name);
  }
  getDateCalss(){
    let isMyDate = this.event && this.event.date.toString() == new Date('4/15/2037').toString();
    return {green :isMyDate,bold:isMyDate }
    //return 'green bold'
    //return ['green','bold']
  }

  getNameStyle():any{
    if(this.event && this.event.name === 'ng-conf 2037')
      return {color :'#e2e674','font-weight':'bold' }
    return {}
  }
  logFoo(){
    console.log('foo');
  }
  somep:any = "some ppppp"
} 