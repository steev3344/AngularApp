import { Pipe, PipeTransform } from '@angular/core';
import { DisplayType } from 'app/shared/models/enums/display-type.enum';

@Pipe({
  name: 'displayType'
})
export class DisplayTypePipe implements PipeTransform {

  transform(value: string): string {
    return this.getLabel(value);
  }

  /**
   * get the label for corresponding display type
   * @param value selected display type value
   */
  private getLabel(value: string) {
    switch (value) {
      case DisplayType.RADIO: return 'Radio';
      case DisplayType.SELECT: return 'Select';
      case DisplayType.CHECKBOX: return 'Checkbox';
      default : return 'Input';
    }
  }

}
