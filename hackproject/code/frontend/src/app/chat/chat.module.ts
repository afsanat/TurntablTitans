import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatRoutingModule} from './chat-routing.module';
import {ChatHomeComponent} from './chat-home/chat-home.component';
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { AxaComponent } from './axa-home/axa/axa.component';


@NgModule({
  declarations: [
    ChatHomeComponent,
    AxaComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ]
})
export class ChatModule {
}
