import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../../core/models/equipment';
import { EquipmentService } from '../../core/services/equipment.service';

@Pipe({
  name: 'equipmentIdToName'
})
export class EquipmentIdToNamePipe implements PipeTransform {
  private requestedEquipment: Map<string, Observable<string>>;

  constructor(private equipmentService: EquipmentService) {
    this.requestedEquipment = new Map();
  }

  transform(value: any, args?: any): any {
    if (!this.requestedEquipment.get(value)) {
      this.requestedEquipment.set(
        value,
        this.equipmentService
          .getEquipmentById(value)
          .map(result => this.getName(result))
      );
    }
    return this.requestedEquipment.get(value);
  }

  private getName(value: Equipment): string {
    return value.name;
  }

}
