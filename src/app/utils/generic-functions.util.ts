import { AbstractControl } from '@angular/forms';
import { MessageConstants } from '../constants/messages.constants';

export class GenericFunctionUtil {
  private static MESSAGE = { ...MessageConstants.MESSAGES };

  public static validateField(control: AbstractControl): string {
    let message = '';


    if (control.errors == null) {
      return '';
    } else if (!control.errors) {
      message = '';
    } else if (control.errors.required) {
      message = this.MESSAGE.VALIDATIONS.REQUIRED;
    } else if (control.errors.minlength) {
      message = `El campo requiere ${control.errors.minlength.requiredLength} caracteres`;
    } else if (control.errors.email) {
      message = 'El campo no cumple con el formato de un email.';
    }

    return message;
  }
}
