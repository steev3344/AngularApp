import { Pipe, PipeTransform } from '@angular/core';
import { ProductAttributeGroup } from 'src/app/shared/models/enums/product-attribute-group.enum';

@Pipe({
  name: 'productAttributeGroup'
})
export class ProductAttributeGroupPipe implements PipeTransform {

  transform(value: string): string {
    return this.getLabel(value);
  }

  /**
   * get the label for corresponding product attribute group
   * @param value selected product attribute group value
   */
  private getLabel(value: string) {
    switch (value) {
      case ProductAttributeGroup.MULTIMEDIA: return 'Multimedia Features';
      case ProductAttributeGroup.SAFETY: return 'Safety Measures';
      case ProductAttributeGroup.ENGINE: return 'Vehicle Engine';
      case ProductAttributeGroup.TYRE: return 'Vehicle Tyre';
      case ProductAttributeGroup.SPECIFICATION: return 'Vehicle Specifications';
    }
  }

}
