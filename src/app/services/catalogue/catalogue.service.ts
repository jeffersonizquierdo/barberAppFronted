import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServices } from 'src/app/models/AuthServices';
import { Catalogue } from 'src/app/models/catalogue';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  imageURL = 'http://localhost:8080/cloudinary/'
  constructor(private httpClient: HttpClient, private authService: AuthServices) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  usuario:Usuario = this.authService.usuario;

  private agregarAuthorizationHeader(){

    let token = this.authService.token

    if (token != null){
      console.log(token + " tokennnnn");

      return this.httpHeadres.append('Authorization', 'Bearer ' + token);
    }

    return this.httpHeadres

  } 

  upload(imagen:File, folderimage:string){
    const data = new FormData();
    data.append('file',imagen)
    data.append('upload_preset', folderimage)
    data.append('cloud_name','dgrnkufei')

    return this.httpClient.post("https://api.cloudinary.com/v1_1/dgrnkufei/image/upload/",data );
  }

  saveCatalogue(newCatalogue: Catalogue): Observable<Catalogue>{

    return this.httpClient.post<Catalogue>("http://localhost:8080/images/save", newCatalogue,  {headers: this.agregarAuthorizationHeader()})
  }

  listCatalogo():  Observable<Catalogue>{

    return  this.httpClient.get<Catalogue>(`http://localhost:8080/barbershop/consultCatalogue/${this.usuario.id}`, {headers: this.agregarAuthorizationHeader()})
  } 

  deleteCatalogue(id:Number):any{
    return  this.httpClient.delete<Catalogue>(`http://localhost:8080/images/delete/${id}`, {headers: this.agregarAuthorizationHeader()})
  }
}
