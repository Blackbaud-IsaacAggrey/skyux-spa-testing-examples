import { HomeComponentPage } from '../src/app/home.pageobject';

describe('Home Component', () => {
   let component = new HomeComponentPage();

  it('should render', async (done) => {
    HomeComponentPage.go();

    let h1 = await component.headingText;
    expect(h1).toEqual('SKY UX Template');

    let alert  = await component.alertText;
    expect(alert).toEqual(`You've just taken your first step into a larger world.`);
    done();
  });
});
