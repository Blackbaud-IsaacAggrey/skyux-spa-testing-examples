import { HomeComponentPage } from '../src/app/home.pageobject';

describe('Home Component', () => {
   let component = new HomeComponentPage();

  it('should render', (done) => {
    HomeComponentPage.go();

    component.headingText.then((h1result: string) => {
      expect(h1result).toEqual('SKY UX Template');

      component.alertText.then((alertResult: string) => {
        expect(alertResult).toEqual(`You've just taken your first step into a larger world.`);
        done();
      });
    });
  });
});
