import { EmailGeneratorPage } from './app.po';

describe('email-generator App', () => {
  let page: EmailGeneratorPage;

  beforeEach(() => {
    page = new EmailGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
