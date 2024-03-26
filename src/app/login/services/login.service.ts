import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, Password, Response, User, responseValid } from '../interfaces/user.interface';
import { RespuestaLogin } from '../interfaces/respuestalogin.interface';
import { DatosEnviados } from '../interfaces/datosenviados.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  url:string = 'https://proyectoclinicaback-back-production.up.railway.app/'



  getUserByEmail(emai:string){
    return this.http.get<User>(this.url + 'auth/'+emai)
  }
  crearUsuario(userNew:User){
    return this.http.post<User>(this.url + 'auth', userNew)
  }
  cambiarPassword(newPassword:Password,id:number){
    return this.http.patch<User>(this.url + 'auth/'+id, newPassword)
  }
  checkEmail(dataEmail:{email:string}){
    return this.http.post<responseValid>(this.url + 'recuperar-pass',dataEmail)
  }
  checkRespuesta(dataRespuesta:{email:string,respuesta:string}){
    return this.http.post<{status:number,message:string}>(this.url +'recuperar-pass/check-respuesta',dataRespuesta)
  }
  getPregunta(dataEmail:{email:string}){
    return this.http.post<{status:number,question:string}>(this.url + 'recuperar-pass/check-question',dataEmail);
  }
  sendCode(email:Email){
    return this.http.post<Response>(this.url + 'email',email)
  }
  validarUsuario(datos:DatosEnviados){
    return this.http.post<RespuestaLogin>(this.url + 'login',datos)
  }

}
