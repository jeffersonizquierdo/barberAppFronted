import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  imageURL = 'http://localhost:8080/cloudinary/'
  constructor(private httpClient: HttpClient) { }

  // public list(): Observable<Catalogue[]>{
  //   return this.httpClient.get<Catalogue[]>(this.imageURL+'list');
  // }

  upload(imagen:File, folderimage:string){
    const data = new FormData();
    data.append('file',imagen)
    data.append('upload_preset', folderimage)
    data.append('cloud_name','dgrnkufei')

    return this.httpClient.post("https://api.cloudinary.com/v1_1/dgrnkufei/image/upload/",data);
  }

  saveCatalogue(newCatalogue: Catalogue): Observable<Catalogue>{

    return this.httpClient.post<Catalogue>("http://localhost:8080/images/save", newCatalogue)
  }

  listCatalogo():  Observable<Catalogue>{
    return  this.httpClient.get<Catalogue>(`http://localhost:8080/barbershop/consultCatalogue/${1}`)
  } 

  deleteCatalogue(id:Number):any{
    return  this.httpClient.get<Catalogue>(`http://localhost:8080/barbershop/consultCatalogue/${id}`)
  }
}
