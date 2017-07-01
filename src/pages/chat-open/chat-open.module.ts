import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatOpenPage } from './chat-open';

@NgModule({
  declarations: [
    ChatOpenPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatOpenPage),
  ],
  exports: [
    ChatOpenPage
  ]
})
export class ChatOpenPageModule {}
