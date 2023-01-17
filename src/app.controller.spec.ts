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

  describe('lenovo notebooks', () => {
    it('should return the response correct with all informations about Lenovo notebooks', async () => {
      const response = [{"title":"Lenovo V110-15IA...","price":"$321.94","description":"Lenovo V110-15IAP, 15.6\" HD, Celeron N3350 1.1GHz, 4GB, 128GB SSD, Windows 10 Home","right":"8 reviews"},{"title":"Lenovo V110-15IA...","price":"$356.49","description":"Asus VivoBook 15 X540NA-GQ008T Chocolate Black, 15.6\" HD, Pentium N4200, 4GB, 500GB, Windows 10 Home, En kbd","right":"$299.00"},{"title":"Lenovo ThinkPad...","price":"$404.23","description":"Lenovo ThinkPad E31-80, 13.3\" HD, Celeron 3855U 1.6GHz, 4GB, 128GB SSD, Windows 10 Home","right":"12 reviews"},{"title":"Lenovo V110-15IS...","price":"$409.63","description":"Lenovo V110-15ISK, 15.6\" HD, Core i3-6006U, 8GB, 128GB SSD, Windows 10 Home","right":"2 reviews"},{"title":"Lenovo V110-15IS...","price":"$454.73","description":"Lenovo V110-15ISK, 15.6\" HD, Core i3-6006U, 4GB, 128GB SSD, Windows 10 Pro","right":"$399.00"},{"title":"Lenovo V110-15IK...","price":"$465.95","description":"Lenovo V110-15IKB, 15.6\" HD, Core i5-7200U, 4GB, 500GB, DOS","right":"$399.99"},{"title":"Lenovo V510 Blac...","price":"$484.23","description":"Lenovo V510 Black, 14\" HD, Core i3-6006U, 4GB, 128GB SSD, Windows 10 Home","right":"12 reviews"},{"title":"Lenovo V510 Blac...","price":"$487.80","description":"Lenovo V510 Black, 15.6\" HD, Core i3-6006U, 4GB, 128GB SSD, Windows 10 Home","right":"10 reviews"},{"title":"Lenovo V510 Blac...","price":"$498.23","description":"Lenovo V510 Black, 15.6\" FHD, Core i3-7100U, 4GB, 128GB SSD, Windows 10 Pro","right":"$410.66"},{"title":"Lenovo ThinkPad...","price":"$999.00","description":"Lenovo ThinkPad L570, 15.6\" FHD, Core i7-7500U, 8GB, 256GB SSD, Windows 10 Pro","right":"$454.73"},{"title":"Lenovo ThinkPad...","price":"$1096.02","description":"Lenovo ThinkPad L460, 14\" FHD IPS, Core i7-6600U, 8GB, 256GB SSD, Windows 10 Pro","right":"$457.38"},{"title":"Lenovo Legion Y5...","price":"$1112.91","description":"Lenovo Legion Y520-15IKBM, Black, 15.6\" FHD IPS, Core i5-7300HQ, 8 GB, 128GB SSD + 2 TB HDD, NVIDIA GeForce GTX 1060 6 GB, FreeDOS + Windows 10 Home","right":"5 reviews"},{"title":"Lenovo Legion Y5...","price":"$1133.91","description":"Lenovo Legion Y520, 15.6\" FHD, Core i7-7700HQ, 8GB, 128 GB SSD + 1TB HDD, GTX 1050 4GB, Windows 10 Home","right":"9 reviews"},{"title":"Lenovo Legion Y5...","price":"$1149.00","description":"Lenovo Legion Y520-15IKBM, 15.6\" FHD IPS, Core i7-7700HQ, 8GB, 128GB SSD + 1TB, GeForce GTX 1060 Max-Q 6GB, DOS","right":"2 reviews"},{"title":"Lenovo Yoga 720...","price":"$1149.73","description":"Lenovo Yoga 720 Grey, 15.6\" FHD IPS, Core i5-7300HQ, 8GB, 256GB SSD, GeForce GTX 1050 2GB, Windows 10 Home","right":"9 reviews"},{"title":"Lenovo Yoga 910...","price":"$1199.73","description":"Lenovo Yoga 910 Grey, 13.9\" FHD Touch, Core i5-7200U, 8GB, 256GB SSD, Windows 10 Home","right":"2 reviews"},{"title":"Lenovo IdeaPad M...","price":"$1212.16","description":"Lenovo IdeaPad Miix 510 Platinum Silver, 12.2\" IPS Touch, Core i5-7200U, 8GB, 256GB SSD, 4G, Windows 10 Pro","right":"4 reviews"},{"title":"Lenovo ThinkPad...","price":"$1349.23","description":"Lenovo ThinkPad T470, 14\" FHD IPS, Core i5-7200U, 8GB, 256GB SSD, Windows 10 Pro","right":"14 reviews"},{"title":"Lenovo ThinkPad...","price":"$1362.24","description":"Lenovo ThinkPad Yoga 370 Black, 13.3\" FHD IPS Touch, Core i5-7200U, 8GB, 256GB SSD, 4G, Windows 10 Pro","right":"$1098.42"},{"title":"Lenovo Legion Y7...","price":"$1399.00","description":"Lenovo Legion Y720, 15.6\" FHD IPS, Core i7-7700HQ, 8GB, 128GB SSD + 2TB HDD, GeForce GTX 1060 6GB, DOS, RGB backlit keyboard","right":"1 reviews"}]
      const result = await appController.getNotebooks()  
      expect(result).toStrictEqual(response);
    });
  });
});
