import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ValidateFullName } from '../utils/validators/fullname.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, ValidateFullName]),
  })

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.get('fullName')?.getError('errorMessage'));
  }

}
