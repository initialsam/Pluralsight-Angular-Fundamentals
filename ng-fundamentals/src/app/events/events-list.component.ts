import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
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
  events: any[]
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
  constructor(private eventService: EventService,
    private toastr: ToastrService) { }
  handleThumbnailClicked(name) {
    this.toastr.success(name);
  }
  handleEventClicked(data) {
    console.log('received:', data);

  }
}