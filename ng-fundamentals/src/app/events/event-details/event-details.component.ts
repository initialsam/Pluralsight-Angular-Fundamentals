import { Component } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { EventService, IEvent, ISession } from '../shared/index'

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})
export class EventDetailsComponent {
  event: IEvent
  addMode: boolean
  _filterBy: string = 'all';
  _sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }
  ngOnInit() {
    //snapshot 不會監看id有沒有改變
    //this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    })
  }
  addSession() {
    this.addMode = true
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }
}