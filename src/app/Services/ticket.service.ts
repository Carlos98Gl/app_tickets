import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Ticket } from '../Interfaz/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private endpoint:string = environment.apiUrl;
  private apirUrl:string = this.endpoint + "ticket/";

  constructor(private http:HttpClient){}
  
  getList():Observable<Ticket[]>{
   return this.http.get<Ticket[]>(`${this.apirUrl}list`)
   
  }

  add(modelo:Ticket):Observable<Ticket>{
    return this.http.post<Ticket>(`${this.apirUrl}insert`,modelo);
  }

  update(idTicket:number,modelo:Ticket[]):Observable<Ticket>{
    return this.http.put<Ticket>(`${this.apirUrl}update/${idTicket}`,modelo)
  }
}

