import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevisAcceptedService {

  url: string = 'http://localhost:8080/api/v1/devis';

  constructor(private http:HttpClient) {
   }

    getAllDevisAccepted(): any{
      return this.http.get(this.url + '/accepted-devis');
    }

    generateContrat(id: any): any{
      return this.http.get(this.url  + '/' + id);
    }

}
