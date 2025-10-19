import {
  AfterViewInit,
  Component,
  DestroyRef,
  DoCheck,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyref = inject(DestroyRef);
  // private interval?: NodeJS.Timeout;
  // private interval?: ReturnType<typeof setInterval>;

  constructor() {}
  // ngOnDestroy(): void {
  //   // throw new Error('Method not implemented.');
  //   // clearInterval(this.interval);
  // }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log('After view init');
  }
  // ngDoCheck(): void {
  //   // throw new Error('Method not implemented.');
  //   console.log("interval changed");
  // }

  ngOnInit() {
    console.log('Init');
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 to 0.99999999
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyref.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
