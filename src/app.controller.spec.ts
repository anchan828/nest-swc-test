import { Test, TestingModule } from '@nestjs/testing';
import { Expose, plainToClass } from 'class-transformer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'reflect-metadata';
class TestDto {
  @Expose({ name: 'name' })
  public name!: string;
}

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
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should return dto', () => {
      expect(plainToClass(TestDto, { name: 'hi' })).toBe({ name: 'hi' });
    });
  });
});
