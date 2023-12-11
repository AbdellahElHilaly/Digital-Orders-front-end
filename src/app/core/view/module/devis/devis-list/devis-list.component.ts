import { Component, OnInit } from '@angular/core';
import { DevisListService } from '../../../../service/devis/devis-list.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-devis-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './devis-list.component.html',
  styleUrl: './devis-list.component.scss'
})
export class DevisListComponent implements OnInit {

  devisList: any[] = [];

  constructor(private devisService: DevisListService){}

  ngOnInit(): void {
    this.devisService.getAllDevis().subscribe(
      (data: any[]) => {
        this.devisList = data;
      }
    );
  }
}
