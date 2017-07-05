import { HranivFrontendCliPage } from './app.po';

describe('hraniv-frontend-cli App', function() {
  let page: HranivFrontendCliPage;

  beforeEach(() => {
    page = new HranivFrontendCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
