import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

const appRoutes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
