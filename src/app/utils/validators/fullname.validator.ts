import { AbstractControl } from '@angular/forms';

export function ValidateFullName(control: AbstractControl) {
  let length = control.value.split(' ').length;
  let error = null;

  if (length === 2) {
    const values = control.value.split(' ');
    if (values[0].length > 10) {
      error = { errorMessage: 'Length of first name must be less than 10 character' };
    } else if (values[0].length === 0) {
      error = { errorMessage: 'Please provide first name' };
    } else if (values[1].length > 10) {
      error = { errorMessage: 'Length of second name must be less than 10 character' };
    } else if (values[1].length === 0) {
      error = { errorMessage: 'Please provide second name' };
    }
  } else if (length === 1 && control.value?.length > 0) {
    error = { errorMessage: 'Please provide second name' };
  } else if (length > 2) {
    error = { errorMessage: 'Only single space is allowed' };
  } else {
    error = { errorMessage: 'Please provide full name' };
  }

  return error;
}
