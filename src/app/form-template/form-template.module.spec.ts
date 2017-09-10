import { FormTemplateModule } from './form-template.module';

describe('FormTemplateModule', () => {
  let formTemplateModule: FormTemplateModule;

  beforeEach(() => {
    formTemplateModule = new FormTemplateModule();
  });

  it('should create an instance', () => {
    expect(formTemplateModule).toBeTruthy();
  });
});
