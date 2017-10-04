import { SkyHostBrowser } from '@blackbaud/skyux-builder/runtime/testing/e2e';
import { element, by } from 'protractor';

export class HomeComponentPage {
    private content = {
        heading: by.tagName('h1'),
        alert: by.className('sky-alert')
        // ..add more selectors for your component
    };

    public static go() {
        SkyHostBrowser.get('/');
    }

    get headingText() {
        return element(this.content.heading).getText();
    }

    get alertText() {
        return element(this.content.alert).getText();
    }
}
