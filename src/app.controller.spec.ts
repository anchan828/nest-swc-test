import 'reflect-metadata';
import { Test, TestingModule } from '@nestjs/testing';
import { Expose, plainToInstance } from 'class-transformer';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
      expect(plainToInstance(TestDto, { name: 'hi' })).toEqual({ name: 'hi' });
    });
  });
});
