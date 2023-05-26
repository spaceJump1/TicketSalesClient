import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import {TabMenuModule} from "primeng/tabmenu";
import {TabPanel, TabView, TabViewModule} from "primeng/tabview";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { StatisticComponent } from './statistic/statistic.component';
import { TableModule } from 'primeng/table';
import { TourLoaderComponent } from './tour-loader/tour-loader.component';
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    SettingsComponent,
    StatisticComponent,
    TourLoaderComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    TabViewModule,
    FormsModule,
    ToastModule,
    TableModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers:[
    MessageService
  ]

})
export class SettingsModule { }


