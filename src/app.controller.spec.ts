import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const jsonResponse = {
        "notebook": {
        "img": "link",
        "price": "1",
        "titile": "Lenovo",
        "description": "lorem",
        "ratings": "1",
        "pull-right": "12",
        "data-rating": "4"
        }
      }
      ;
      expect(appController.getNotebooks).toBe(jsonResponse);
    });
  });
});
