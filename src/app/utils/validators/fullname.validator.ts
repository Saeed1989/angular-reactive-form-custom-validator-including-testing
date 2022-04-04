import { AbstractControl } from '@angular/forms';

export function ValidateFullName(control: AbstractControl) {
  return control.value.split(" ").length === 2 ?  null : { invalidName: true };
}
