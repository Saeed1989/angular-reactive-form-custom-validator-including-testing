import { AbstractControl } from '@angular/forms';
import { ValidationMessages } from 'src/app/core/constants/validataion-messages';

export function ValidateFullName(control: AbstractControl) {
  if (!control.dirty && !control.touched) return null;

  let length = control.value.split(' ').length;
  let error = null;

  if (length === 2) {
    const values = control.value.split(' ');
    if (values[0].length > 10) {
      error = {
        errorMessage: ValidationMessages.FULLNAME_004,
      };
    } else if (values[0].length === 0) {
      error = { errorMessage: ValidationMessages.FULLNAME_002 };
    } else if (values[1].length > 10) {
      error = {
        errorMessage: ValidationMessages.FULLNAME_005,
      };
    } else if (values[1].length === 0) {
      error = { errorMessage: ValidationMessages.FULLNAME_003 };
    }
  } else if (length === 1 && control.value?.length > 0) {
    error = { errorMessage: ValidationMessages.FULLNAME_003 };
  } else if (length > 2) {
    error = { errorMessage: ValidationMessages.FULLNAME_006 };
  } else {
    error = { errorMessage: ValidationMessages.FULLNAME_001 };
  }

  return error;
}
