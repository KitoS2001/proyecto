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

url:string = 'http://localhost:3000/'



  getUserByEmail(emai:string){
    return this.http.get<User>(this.url + 'auth/'+emai)
  }
  crearUsuario(userNew:User){
    return this.http.post<User>(this.url + 'auth', userNew)
  }
  cambiarPassword(newPassword:Password,id:number){
    return this.http.patch<User>(this.url + 'auth/'+id, newPassword)
  }
  sendCode(email:Email){
    return this.http.post<Response>(this.url + 'email',email)
  }
  validarUsuario(datos:DatosEnviados){
    return this.http.post<RespuestaLogin>(this.url + 'login',datos)
  }

}
