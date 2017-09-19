import { FormInventoryModule } from './form-inventory.module';

describe('FormInventoryModule', () => {
  let formInventoryModule: FormInventoryModule;

  beforeEach(() => {
    formInventoryModule = new FormInventoryModule();
  });

  it('should create an instance', () => {
    expect(FormInventoryModule).toBeTruthy();
  });
});
