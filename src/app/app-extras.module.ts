import { NgModule } from '@angular/core';
import { MyAppService } from './foo/my-app-service.service';
import { FooTileComponent } from './foo/my-app-tile.component';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [MyAppService],
  entryComponents: [FooTileComponent]
})
export class AppExtrasModule { }
