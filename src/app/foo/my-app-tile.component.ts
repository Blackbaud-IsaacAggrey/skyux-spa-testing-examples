import { Component, OnInit } from '@angular/core';
import { MyAppService } from './my-app-service.service';

@Component({
    selector: 'my-app-tile',
    templateUrl: './my-app-tile.component.html'
})

export class FooTileComponent implements OnInit {
    public foos: any[] = [];

    constructor(private service: MyAppService) { }

    public ngOnInit(): void {
        this.service.getFoos().subscribe((data) => {
            this.foos = data;
        });
    }
}
