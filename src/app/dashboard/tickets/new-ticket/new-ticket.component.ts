import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
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
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, textInput: string) {
    // console.dir(title);
    // const enteredTitle = title.value;
    // console.log('EnteredTitle: ' + enteredTitle);
    console.log('something', title, textInput);
    this.form?.nativeElement.reset();
  }
}
