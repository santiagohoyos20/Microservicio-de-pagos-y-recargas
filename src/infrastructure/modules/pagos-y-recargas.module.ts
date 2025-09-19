import { Module } from '@nestjs/common';
import { PagosYRecargasService } from '../../pagos-y-recargas/pagos-y-recargas.service';
import { PagosYRecargasController } from '../controllers/pagos-y-recargas.controller';

@Module({
  providers: [PagosYRecargasService],
  controllers: [PagosYRecargasController]
})
export class PagosYRecargasModule {}
