import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Empresa } from '../Interfaz/empresa'; 

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private endpoint:string = environment.apiUrl;
  private apirUrl:string=this.endpoint + "empresa/"
 
  constructor(private http:HttpClient){}
  getList():Observable<Empresa[]>{
   return this.http.get<Empresa[]>(`${this.apirUrl}listAll`)
   
  }
}