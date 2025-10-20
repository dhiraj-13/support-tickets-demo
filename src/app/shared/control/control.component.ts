import {
  Component,
  ContentChild,
  contentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
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
export class ControlComponent {
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
