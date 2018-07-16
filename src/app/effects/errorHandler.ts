import { of } from 'rxjs';

export const errorHandler = (action) => (err) => {
    let message = err.error && err.error.message;
    if (!message) {
      message = 'Something went wrong, try again.';
    }
    return of(new action(message));
  };
