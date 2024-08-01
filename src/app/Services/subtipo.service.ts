import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Subtipo } from '../Interfaz/subtipo'; 

@Injectable({
  providedIn: 'root'
})
export class SubtipoService {

  private endpoint:string = environment.apiUrl;
  private apirUrl:string=this.endpoint + "subtipo/"
 
  constructor(private http:HttpClient){}
  getList():Observable<Subtipo[]>{
   return this.http.get<Subtipo[]>(`${this.apirUrl}listAll`)
   
  }
}