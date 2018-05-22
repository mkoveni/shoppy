import { IkweziPage } from './app.po';

describe('ikwezi App', () => {
  let page: IkweziPage;

  beforeEach(() => {
    page = new IkweziPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
