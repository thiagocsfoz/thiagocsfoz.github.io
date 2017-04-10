import { ThiagocsfozPage } from './app.po';

describe('thiagocsfoz App', function() {
  let page: ThiagocsfozPage;

  beforeEach(() => {
    page = new ThiagocsfozPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
