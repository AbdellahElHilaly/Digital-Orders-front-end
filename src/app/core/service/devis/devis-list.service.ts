import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevisListService {

  url: string = 'http://localhost:8080/api/v1';

  constructor(private http:HttpClient) {}

  getAllDevis(): any{
    return this.http.get(this.url + '/devis/devis');
  }
}
