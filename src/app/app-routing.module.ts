import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByCountryComponent } from './Pais/Pages/by-country/by-country.component';
import { ByRegionComponent } from './Pais/Pages/by-region/by-region.component';
import { ByCapitalComponent } from './Pais/Pages/by-capital/by-capital.component';
import { ShowCountryComponent } from './Pais/Pages/show-country/show-country.component';


const routes: Routes =[
    {
        // Esta es mi ruta principal de la app
        path:'',
        component: ByCountryComponent,
        pathMatch:'full'
    },
    {
        path:'region',
        component:ByRegionComponent,
        
    },
    {
        path:'capital',
        component:ByCapitalComponent
    },
    {
        // De esta manera digo que por la URL,
        // le vamos a mandar el id del pais a mostrar
        path:'country/:id',
        component:ShowCountryComponent
    },
    {
        path:'**',
        redirectTo:''
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule

    ]


})
export class AppRoutingModule{}