import { AbstractControl } from '@angular/forms';

export function ValidateFullName(control: AbstractControl) {
  let lenth = control.value.split(' ').length;
  let error = null;
  if (lenth === 2) {
    error = null;
  } else if (lenth === 1 && control.value?.length > 0) {
    error = { errorMessage: 'Please provide second name' };
  } else if (lenth > 2) {
    error = { errorMessage: 'Only single space is allowed' };
  } else {
    error = { errorMessage: 'Please provide full name' };
  }
  return error;
}
