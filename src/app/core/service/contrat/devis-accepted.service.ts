import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevisAcceptedService {

  url: string = 'http://localhost:8080/api/v1';

  constructor(private http:HttpClient) {}

    getAllDevisAccepted(): any{
      return this.http.get(this.url + '/devis/accepted-devis');
    }

    downloadContrat(devisId: string): Observable<HttpResponse<Blob>> {
      const url = `${this.url}/contrats/${devisId}`;
      return this.http.get<Blob>(url, { observe: 'response', responseType: 'blob' as 'json' });
    }

}
