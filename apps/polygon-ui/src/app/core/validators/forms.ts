import { Validators } from '@angular/forms';

export const exampleValidator = {
  title: [
    Validators.minLength(4),
    Validators.maxLength(200),
    Validators.required
  ]
};