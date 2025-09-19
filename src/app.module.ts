import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagosYRecargasModule } from './infrastructure/modules/pagos-y-recargas.module';

@Module({
  imports: [PagosYRecargasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
