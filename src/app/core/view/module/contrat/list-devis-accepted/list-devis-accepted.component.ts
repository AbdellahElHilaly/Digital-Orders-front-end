import { Component, OnInit } from '@angular/core';
import { DevisAcceptedService } from '../../../../service/contrat/devis-accepted.service';
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
        }
      );
    }

    generateContrat(devisId: string): void {
      this.devisService.downloadContrat(devisId).subscribe((response) => {
        this.downloadFile(response.body, response.headers.get('content-disposition'));
      });
    }

    private downloadFile(data: Blob | null, contentDisposition: string | null): void {
      if (!data) {
        console.error('No data received for download.');
        return;
      }

      const blob = new Blob([data], { type: 'application/pdf' });

      const fileName = contentDisposition
        ? contentDisposition.split(';')[1].trim().split('=')[1]
        : 'contrat.pdf';

      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = fileName;

      // Trigger the download
      downloadLink.click();

      // Clean up
      window.URL.revokeObjectURL(downloadLink.href);
    }





}
