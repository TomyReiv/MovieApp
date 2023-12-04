import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';



@NgModule({
  declarations: [],
  exports:[
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    DividerModule,
    MenubarModule,
  ]
})
export class StylesModule { }
