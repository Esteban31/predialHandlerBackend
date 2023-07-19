import { Injectable } from '@nestjs/common';
import { Predial } from './predials.entity';

@Injectable()
export class PredialsService {
  findAll(): Predial[] {
    return [
      {
        id: 1,
        idOwner: 1,
        idTerrain: 1,
        idContruction: 1,
      },
    ];
  }
}
