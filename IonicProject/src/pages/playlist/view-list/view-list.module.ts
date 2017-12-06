import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewListPage } from './view-list';

@NgModule({
  declarations: [
    ViewListPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewListPage),
  ],
})
export class ViewListPageModule {}
