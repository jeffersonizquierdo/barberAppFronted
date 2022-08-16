import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usaurio } from "./Usuarios";

@Injectable({
  providedIn: 'root'
})

export class AuthServices{

  constructor(private http:HttpClient){

  }

  login(usaurio:Usaurio):Observable<any>{

    const url = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('barberappfront' + ':' + '12345');

    const httpHeadres = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization' : 'Basic ' + credenciales})

    let params = new URLSearchParams();

    params.set('grant_type','password');
    params.set('username', usaurio.username);
    params.set('password', usaurio.password);
    console.log(params.toString());
    return this.http.post(url, params.toString(), {headers: httpHeadres})

  }


  saveUser(e:any){

  }

  saveToken(e:any){

  }



}