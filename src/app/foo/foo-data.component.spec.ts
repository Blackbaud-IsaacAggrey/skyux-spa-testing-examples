import { TestBed } from '@angular/core/testing';
import { expect, SkyAppTestModule } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { FooDataComponent } from './foo-data.component';
import { ComponentFixture } from '@angular/core/testing';

describe('FooTileComponent component', () => {
    let fixture: ComponentFixture<FooDataComponent>;
    let component: FooDataComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SkyAppTestModule]
        });

        fixture = TestBed.createComponent(FooDataComponent);
        component = fixture.componentInstance;
    });

    it('should display a heading', () => {
        const heading = fixture.nativeElement.querySelector('h3');

        expect(heading).toBeVisible();
        expect(heading).toHaveText(`Foo data`);
    });

    it('should not show list of foos if there are none', () => {
        component.foos = [];

        fixture.detectChanges();

        const fooList = fixture.nativeElement.querySelector('.foo');
        expect(fooList).toBeNull();
    });

    it('should show list of foos if exists', () => {
        component.foos = [
            { label: 'abc', value: 123 }
        ];

        fixture.detectChanges();

        const fooList = fixture.nativeElement.querySelector('.foo');
        const fooEntryLabel = fixture.nativeElement.querySelector('.metric-label');
        const fooEntryValue = fixture.nativeElement.querySelector('.metric-value');
        expect(fooList.children.length).toBe(1);
        expect(fooEntryLabel.textContent).toBe('abc');
        expect(fooEntryValue.textContent).toBe('123');
    });

});
