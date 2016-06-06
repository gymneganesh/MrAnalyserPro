import { MrAnalyserPage } from './app.po';

describe('mr-analyser App', function() {
  let page: MrAnalyserPage;

  beforeEach(() => {
    page = new MrAnalyserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mr-analyser works!');
  });
});
