import 'reflect-metadata';
import { Test, TestingModule } from '@nestjs/testing';
import { Expose, plainToInstance } from 'class-transformer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mock, MockProxy } from 'vitest-mock-extended';

// @golevelup/ts-jest -> vitest-mock-extended
type DeepMocked<T> = MockProxy<T> & T;
const createMock = mock;

class TestDto {
  @Expose({ name: 'name' })
  public name!: string;
}

describe('AppController', () => {
  let appController: AppController;
  let service: DeepMocked<AppService>;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: createMock<AppService>() }],
    }).compile();

    appController = app.get<AppController>(AppController);
    service = app.get(AppService);
  });

  describe('root', () => {
    it('should return "test"', () => {
      service.getHello.mockReturnValue('test');
      expect(appController.getHello()).toBe('test');
    });

    it('should return dto', () => {
      expect(plainToInstance(TestDto, { name: 'hi' })).toEqual({ name: 'hi' });
    });
  });
});
