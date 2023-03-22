import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string='https://api.exchangerate.host/latest?base='
  constructor(private http:HttpClient) { }

  getcurrencydata(country1:string){
    return this.http.get(`${this.baseUrl}${country1}`)
  }

}
