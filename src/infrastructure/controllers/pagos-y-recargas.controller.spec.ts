import { Test, TestingModule } from '@nestjs/testing';
import { PagosYRecargasController } from '../../pagos-y-recargas/pagos-y-recargas.controller';

describe('PagosYRecargasController', () => {
  let controller: PagosYRecargasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagosYRecargasController],
    }).compile();

    controller = module.get<PagosYRecargasController>(PagosYRecargasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
