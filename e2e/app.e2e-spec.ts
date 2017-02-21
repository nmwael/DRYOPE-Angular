import { DRYOPEPage } from './app.po';

describe('DRYOPE-Angular App', function() {
  let page: DRYOPEPage;

  beforeEach(() => {
    page = new DRYOPEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
