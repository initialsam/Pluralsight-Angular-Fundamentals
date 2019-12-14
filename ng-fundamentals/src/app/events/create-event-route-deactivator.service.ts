import { CanDeactivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { CreateEventComponent } from './create-event.component';
@Injectable({
  providedIn: 'root'
})
export class CreateEventRouteDeactivate implements CanDeactivate<CreateEventComponent> {
  constructor() { }
  canDeactivate(component: CreateEventComponent) {
    if (component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
  }
}
