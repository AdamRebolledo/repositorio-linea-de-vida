import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PreguntasfrecuentesComponent } from './componentes/preguntasfrecuentes/preguntasfrecuentes.component';
import { AtencionComponent } from './componentes/atencion/atencion.component';
import { AlianzasComponent } from './componentes/alianzas/alianzas.component';
<<<<<<< HEAD
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ErrorcomponentComponent } from './componentes/errorcomponent/errorcomponent.component';
=======
>>>>>>> 3aefb863151bfd9f6d92c87698708f7fb38e08f6

const routes:Routes= [
  {
    path: '', component:InicioComponent, pathMatch:'full'
  },
  {
    path: 'inicio', component:InicioComponent
  },
  {
    path: 'empresa', component:EmpresaComponent
  },
  {
    path: 'servicios', component:ServiciosComponent
  },
  {
    path: 'noticias', component:NoticiasComponent
  },
  {
    path: 'contacto', component:ContactoComponent
  },
  {
    path: 'preguntasfrecuentes', component:PreguntasfrecuentesComponent
  },
  {
    path: 'atencion', component:AtencionComponent
  }
]
// estoy fastidiado con esta profesora
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpresaComponent,
    ServiciosComponent,
    NoticiasComponent,
    ContactoComponent,
    PreguntasfrecuentesComponent,
    AtencionComponent,
<<<<<<< HEAD
    AlianzasComponent,
    EquipoComponent,
    HeaderComponent,
    FooterComponent,
    ErrorcomponentComponent
=======
    AlianzasComponent
>>>>>>> 3aefb863151bfd9f6d92c87698708f7fb38e08f6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
