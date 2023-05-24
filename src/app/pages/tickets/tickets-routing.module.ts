import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketsComponent} from "./tickets.component";
import {TicketListComponent} from "./ticket-list/ticket-list.component";
import {OrderComponent} from "../order/order.component";


const routes: Routes = [
  {path:'',
    component:TicketsComponent,
    children:[
      {
        path:'tickets-list',
        component:TicketListComponent,
      },
      {
        path: 'orders',
        component: OrderComponent,
      },
      {
        path: 'ticket/:id',
        // path: 'ticket',
        loadChildren:() => import('../ticket-info/ticket-info.module').then(m=>m.TicketInfoModule)
      },
      {
        path: 'settings',
        loadChildren: ()  => import('../settings/settings.module').then(m => m.SettingsModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
