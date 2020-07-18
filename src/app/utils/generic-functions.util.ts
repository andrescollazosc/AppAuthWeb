import { AbstractControl } from '@angular/forms';
import { MessageConstants } from '../constants/messages.constants';

export class GenericFunctionUtil {
  private static MESSAGE = { ...MessageConstants.MESSAGES };

  public static validateField(conrtol: AbstractControl): string {
    let message = '';

    if (!conrtol.errors) {
      message = '';
    } else if (conrtol.errors.required) {
      message = this.MESSAGE.VALIDATIONS.REQUIRED;
    } else if (conrtol.errors.minlength) {
      message = `El campo requiere ${conrtol.errors.minlength.requiredLength} caracteres`;
    } else if (conrtol.errors.email) {
      message = 'El campo no cumple con el formato de un email.';
    }

    return message;
  }
}
