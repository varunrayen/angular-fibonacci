import { FibonacciPage } from './app.po';

describe('fibonacci App', () => {
  let page: FibonacciPage;

  beforeEach(() => {
    page = new FibonacciPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
