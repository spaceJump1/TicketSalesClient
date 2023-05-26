import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketInfoRoutingModule } from './ticket-info-routing.module';
import { TicketItemComponent } from './ticket-item/ticket-item.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    TicketItemComponent
  ],
  imports: [
    CommonModule,
    TicketInfoRoutingModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    ReactiveFormsModule,
    CarouselModule,
    FormsModule,
    ToastModule
  ]
})
export class TicketInfoModule { }
