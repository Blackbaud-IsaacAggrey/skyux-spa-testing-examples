import { Component, Input } from '@angular/core';

@Component({
    selector: 'foo-data',
    templateUrl: './foo-data.component.html'
})
export class FooDataComponent {
    @Input() public foos: any[] = [];
}
