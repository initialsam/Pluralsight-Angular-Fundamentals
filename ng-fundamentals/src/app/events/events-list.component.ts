import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventService,IEvent } from './shared/index';

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let item of events" class="col-md-5">
        <event-thumbnail
        (click) = "handleThumbnailClicked(item.name)"
        [event] = "item"
        (eventClick) = "handleEventClicked($event)"></event-thumbnail>
      </div>
    </div>
    <!--<h3>{{thumbnail.somep}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>-->
  </div>
  `,
  styles: [`
    .well div { color: red; }
  `]
})
export class EventsListComponent implements OnInit {
  events: IEvent[]
  ngOnInit(): void {
   this.events = this.route.snapshot.data['events'];
  }
  constructor(private eventService: EventService,
    private toastr: ToastrService,
    private route:ActivatedRoute) { }

  handleThumbnailClicked(name) {
    this.toastr.success(name);
  }
  handleEventClicked(data) {
    console.log('received:', data);

  }
}