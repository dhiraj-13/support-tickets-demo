import {
  AfterViewInit,
  Component,
  DestroyRef,
  DoCheck,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyref = inject(DestroyRef);
  // private interval?: NodeJS.Timeout;
  // private interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect((onCleanup) => {
      // console.log('signal()', this.currentStatus());
      // getTasks.set(this.currentStatus());
      console.log('effect is called');
      const tasks = this.currentStatus();
      const timer = setTimeout(() => {
        console.log(`Current number of tasks: ${tasks.length}`);
      }, 1000);
      onCleanup(() => {
        clearTimeout(timer);
      });
    });
  }

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
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
      } else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyref.onDestroy(() => {
      clearInterval(interval);
    });
  }
}

//  getTasks() {
// throw new Error('Function not implemented.');
// }
