import { TestBed } from '@angular/core/testing';
import { expect, SkyAppTestModule } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { FooTileComponent } from './my-app-tile.component';

describe('FooTileComponent component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SkyAppTestModule]
        });
    });

    it('should display a heading', () => {
        const fixture = TestBed.createComponent(FooTileComponent);
        const heading = fixture.nativeElement.querySelector('h3');

        expect(heading).toBeVisible();
        expect(heading).toHaveText(`Foo data`);
    });

});
