import { Component, OnInit } from '@angular/core';
import { DevisAcceptedService } from '../../../../service/devis-accepted.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-devis-accepted',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-devis-accepted.component.html',
  styleUrl: './list-devis-accepted.component.scss',
})
export class ListDevisAcceptedComponent implements OnInit {

    devisAccepted: any[] = [];

    constructor(private devisService: DevisAcceptedService){}

    ngOnInit(): void {
      this.devisService.getAllDevisAccepted().subscribe(
        (data: any[]) => {
          this.devisAccepted = data;
          console.log(this.devisAccepted);
        }
      );
    }

    generateContrat(devisId: string): void {
      // Call the service method to generate the contrat using the provided devisId
      this.devisService.generateContrat(devisId).subscribe(
        (response: any) => {
          // Handle the response if needed
          console.log('Contrat generated successfully', response);
        },
        (error: any) => {
          // Handle errors if any
          console.error('Error generating contrat', error);
        }
      );
    }




}
