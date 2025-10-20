import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  contentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit, OnInit {
  constructor() {
    // afterRender(() => {
    //   console.log('afterRender');
    // });
    // afterNextRender(() => {
    //   console.log('afternextRender');
    // });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
  }
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private ctrl?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private ctrl =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  // @HostListener('click')
  onClick() {
    console.log('clicked!');
    console.log('el', this.el);
    console.log('something', this.ctrl());
  }
}
