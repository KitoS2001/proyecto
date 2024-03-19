import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './login/pages/inicio/inicio.component';
import { AgendarComponent } from './login/pages/agendar/agendar.component';
import { AvisoPrivacidadComponent } from './login/interfaces/avisoPrivacidad/avisoPrivacidad.component';
import { TerminosCondicionesComponent } from './login/interfaces/terminosCondiciones/terminosCondiciones.component';
import { PoliticaCookiesComponent } from './login/interfaces/politicaCookies/politicaCookies.component';
import { PreguntasComponent } from './login/interfaces/preguntas/preguntas.component';
import { E404Component } from './login/interfaces/e404/e404.component';
import { CrearCuentaComponent } from './login/pages/crear-cuenta/crear-cuenta.component';
import { LoginComponent } from './login/pages/login/login.component';
import { ContactoComponent } from './login/interfaces/contacto/contacto.component';
import { ServiciosComponent } from './login/interfaces/servicios/servicios.component';
import { QuienessomosComponent } from './login/interfaces/quienessomos/quienessomos.component';
import { RecuperarPasswordComponent } from './login/pages/recuperar-password/recuperar-password.component';

const routes: Routes = [
  //RUTAS DE NAVEGACIÓN
  { path: 'Inicio', component: InicioComponent},
  { path: 'Agendar', component: AgendarComponent},
  { path:'Registro', component: CrearCuentaComponent },
  { path:'Login', component: LoginComponent },
  { path: 'Recuperar', component: RecuperarPasswordComponent},
  { path: 'Contacto', component: ContactoComponent },
  { path: 'Servicios', component: ServiciosComponent},
  { path: 'AvisoPrivacidad', component: AvisoPrivacidadComponent},
  { path: 'QuienesSomos', component: QuienessomosComponent},
  { path: 'TerminosCondiciones', component: TerminosCondicionesComponent },
  { path: 'PoliticaCookies', component: PoliticaCookiesComponent},
  { path: 'Preguntas', component: PreguntasComponent},
  { path: 'E404', component: E404Component},
  
  {
    path: 'user',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
