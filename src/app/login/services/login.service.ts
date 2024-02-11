import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, Password, Response, User } from '../interfaces/user.interface';
import { RespuestaLogin } from '../interfaces/respuestalogin.interface';
import { DatosEnviados } from '../interfaces/datosenviados.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getUserByEmail(emai:string){
    return this.http.get<User>('https://proyectoclinicaback-back-production.up.railway.app/auth/'+emai)
  }
  crearUsuario(userNew:User){
    return this.http.post<User>('https://proyectoclinicaback-back-production.up.railway.app/auth', userNew)
  }
  cambiarPassword(newPassword:Password,id:number){
    return this.http.patch<User>('https://proyectoclinicaback-back-production.up.railway.app/auth/'+id, newPassword)
  }
  sendCode(email:Email){
    return this.http.post<Response>('https://proyectoclinicaback-back-production.up.railway.app/email',email)
  }


  validarUsuario(datos:DatosEnviados){
    return this.http.post<RespuestaLogin>('https://proyectoclinicaback-back-production.up.railway.app/login/',datos)
  }

}
