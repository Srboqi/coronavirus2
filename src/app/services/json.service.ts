import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getJSON } from 'jquery';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'

})
export class JsonService {
  departamentos: string[]=[];
  constructor(private http:HttpClient) { }

   getJSON(): Observable<any>{
    return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json');
  }
}
