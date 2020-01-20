import {Component, forwardRef, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CommuterComponent),
  multi: true
}

@Component({
  selector: 'app-commuter',
  templateUrl: './commuter.component.html',
  styleUrls: ['./commuter.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class CommuterComponent implements ControlValueAccessor {

  state = 'off';

  private onChange = (value: any) => {};

  setState(state: string) {
    this.state = state;

    this.onChange(this.state);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(state: string): void {
    this.state = state;
  }


}
