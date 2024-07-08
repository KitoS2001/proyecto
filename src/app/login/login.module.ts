import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';

import { LayoutComponent } from './pages/layout/layout.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgendarComponent } from './pages/agendar/agendar.component';
import { HeaderComponent } from './interfaces/header/header.component';
import { BreadcrumbsComponent } from './interfaces/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './interfaces/footer/footer.component';
import { ContactoComponent } from './interfaces/contacto/contacto.component';
import { ServiciosComponent } from './interfaces/servicios/servicios.component';
import { QuienessomosComponent } from './interfaces/quienessomos/quienessomos.component';
import { UbicacionComponent } from './interfaces/ubicacion/ubicacion.component';
import { PreguntasComponent } from './interfaces/preguntas/preguntas.component';
import { TerminosCondicionesComponent } from './interfaces/terminosCondiciones/terminosCondiciones.component';
import { PoliticaCookiesComponent } from './interfaces/politicaCookies/politicaCookies.component';
import { AvisoPrivacidadComponent } from './interfaces/avisoPrivacidad/avisoPrivacidad.component';
import { NotFoundComponent } from './interfaces/not-found/not-found.component'
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { ServiciospublicoComponent } from './publico/serviciospublico/serviciospublico.component';
import { PreguntaspublicoComponent } from './publico/preguntaspublico/preguntaspublico.component';
import { AdmonpreguntasComponent } from './admon/admonpreguntas/admonpreguntas.component';
import { AdmonusuariosComponent } from './admon/admonusuarios/admonusuarios.component';
import { HeaderadmonComponent } from './admon/headeradmon/headeradmon.component';
//CAPTCHA//
import { NgxCaptchaModule } from 'ngx-captcha';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    LoginComponent,
    CrearCuentaComponent,
    RecuperarPasswordComponent,
    LayoutComponent,
    InicioComponent,
    AgendarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    ContactoComponent,
    ServiciosComponent,
    QuienessomosComponent,
    UbicacionComponent,
    AvisoPrivacidadComponent,
    PoliticaCookiesComponent,
    TerminosCondicionesComponent,
    PreguntasComponent,
    NotFoundComponent,
    PerfilComponent,
    EditarPerfilComponent,
    ServiciospublicoComponent,

        //admon
        HeaderadmonComponent,
        AdmonusuariosComponent,
        AdmonpreguntasComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
