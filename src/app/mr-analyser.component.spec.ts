import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MrAnalyserAppComponent } from '../app/mr-analyser.component';

beforeEachProviders(() => [MrAnalyserAppComponent]);

describe('App: MrAnalyser', () => {
  it('should create the app',
      inject([MrAnalyserAppComponent], (app: MrAnalyserAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mr-analyser works!\'',
      inject([MrAnalyserAppComponent], (app: MrAnalyserAppComponent) => {
    expect(app.title).toEqual('mr-analyser works!');
  }));
});
