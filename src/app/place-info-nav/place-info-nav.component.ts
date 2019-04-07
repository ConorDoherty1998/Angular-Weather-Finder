import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-place-info-nav',
  templateUrl: './place-info-nav.component.html',
  styleUrls: ['./place-info-nav.component.scss']
})
export class PlaceInfoNavComponent {

  drawerOpen: boolean = false;
  @Output() openDrawer = new EventEmitter();
  public clickedEvent: Number[] = [0,0];
  
  passEvent(event: Number[])
  {
    this.clickedEvent = event;
    console.log( event + " Passed to weather");
  }
  checkDrawer()
  {
    if (this.drawerOpen == false)
      this.openDrawer.emit();
  }
  closeDrawer()
  {
    this.openDrawer.emit();
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
