import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsComponent } from './components/things/things.component';
import {ThingsService} from './services/things.service';
import {RouterModule} from '@angular/router';
import { ThingDetailComponent } from './components/thing-detail/thing-detail.component';
import { SubAppComponent } from './components/sub-app/sub-app.component';
import { ThingsSearchItemComponent } from './components/things-search-item/things-search-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ThingsComponent, ThingDetailComponent, SubAppComponent, ThingsSearchItemComponent],
  providers: [ThingsService],
  exports: [ThingsComponent, ThingsSearchItemComponent]
})
export class SubAppModule { }
