import { Test, TestingModule } from '@nestjs/testing';
import { PagosYRecargasService } from './pagos-y-recargas.service';

describe('PagosYRecargasService', () => {
  let service: PagosYRecargasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagosYRecargasService],
    }).compile();

    service = module.get<PagosYRecargasService>(PagosYRecargasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
