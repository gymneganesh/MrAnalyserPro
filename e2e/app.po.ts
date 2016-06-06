export class MrAnalyserPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mr-analyser-app h1')).getText();
  }
}
