import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AxaComponent } from './axa-home/axa/axa.component';
import {ChatHomeComponent} from "./chat-home/chat-home.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: ChatHomeComponent
      },
      {
        path: 'AXA',
        component: AxaComponent
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
