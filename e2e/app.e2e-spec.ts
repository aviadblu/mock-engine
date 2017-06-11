import { MockEnginePage } from './app.po';

describe('mock-engine App', () => {
  let page: MockEnginePage;

  beforeEach(() => {
    page = new MockEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
