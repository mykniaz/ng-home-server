import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {

  static restricted(control: FormControl): {[key: string]: boolean} {
    if (['hello', 'world'].includes(control.value)) {
      return {restrictedVal: true};
    }

    return null;
  }

  // @ts-ignore
  static uniq(control: FormControl): Promise<{[key: string]: boolean}> | Observable<{[key: string]: boolean}> {
    return new Promise((resolve => {
      setTimeout(() => {
        if (control.value === 'async') {
          resolve({uniq: true});
        }

        resolve(null);
      }, 1000);
    }));
  }

}
