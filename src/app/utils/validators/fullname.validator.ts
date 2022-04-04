import { AbstractControl } from '@angular/forms';

export function ValidateFullName(control: AbstractControl) {
  return control.value.split(" ").length > 1 ?  null : { invalidName: true };
}
