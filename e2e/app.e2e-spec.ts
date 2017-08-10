import { TeamNgPage } from './app.po';

describe('team-ng App', () => {
  let page: TeamNgPage;

  beforeEach(() => {
    page = new TeamNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
