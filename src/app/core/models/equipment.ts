export enum EquipmentTypes {
  Machine = 'MACHINE',
  Mat = 'MAT',
  Trx = 'TRX',
  Weight = 'WEIGHT'
}

export enum EquipmentStress {
  Repetition = 'REPETITION',
  Duration = 'DURATION',
}

export interface Equipment {
  id: number;
  name: string;
  type: EquipmentTypes;
  stress_type: EquipmentStress;
  info?: string;
  recommended_duration?: number;
  recommended_repetition?: number;
  recommended_weight?: number;
}
