import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Requerimiento } from '../Interfaz/requerimiento'; 

@Injectable({
  providedIn: 'root'
})
export class RequerimientoService {

  private endpoint:string = environment.apiUrl;
  private apirUrl:string=this.endpoint + "requerimiento/"
 
  constructor(private http:HttpClient){}
  getList():Observable<Requerimiento[]>{
   return this.http.get<Requerimiento[]>(`${this.apirUrl}list`)

  }
}
