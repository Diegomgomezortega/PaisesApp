import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './Pages/by-capital/by-capital.component';
import { ByCountryComponent } from './Pages/by-country/by-country.component';
import { ByRegionComponent } from './Pages/by-region/by-region.component';
import { ShowCountryComponent } from './Pages/show-country/show-country.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  exports:[
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
