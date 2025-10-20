import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { Form, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @Output() addTicket = new EventEmitter<{ title: string; text: string }>();
  addTicket = output<{ title: string; text: string }>();
  enteredTitle = '';
  enteredText = '';

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log('Afterviewinit', this.form?.nativeElement);
    // console.log("");
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('oninit', this.form?.nativeElement);
  }
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit() {
    // console.dir(title);
    // const enteredTitle = title.value;
    // console.log('EnteredTitle: ' + enteredTitle);
    // console.log('something', title, textInput);
    // this.form().nativeElement.reset();
    this.addTicket.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
