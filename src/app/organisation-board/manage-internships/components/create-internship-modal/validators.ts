import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const rangeValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const lowRange = control.get('lowRange')?.value;
  const highRange = control.get('highRange')?.value;

  return lowRange && highRange && lowRange >= highRange
    ? { rangeError: true }
    : null;
};
