import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Area } from '../Interfaz/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

 private endpoint:string = environment.apiUrl; // trae la ruta del endpoint base
 private apirUrl:string=this.endpoint + "area/" // concatena endpoint base con area

 constructor(private http:HttpClient){}
 getList():Observable<Area[]>{
  return this.http.get<Area[]>(`${this.apirUrl}list`)
 }

}
