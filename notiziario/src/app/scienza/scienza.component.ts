import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-scienza',
  templateUrl: './scienza.component.html',
  styleUrls: ['./scienza.component.css']
})
export class ScienzaComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  homeData: any = [];
  pagina: any = 0;

 ngOnInit(): void {
   this.apiService.main(this.pagina).subscribe((data) => {
     this.homeData = data.results;
   });
 }
 
nextPage() {
  this.pagina++;
  this.apiService.main(this.pagina).subscribe((data) => {
    this.homeData = data.results;
  });
}

previousPage() {
  if (this.pagina > 0) {
    this.pagina--;
    this.apiService.main(this.pagina).subscribe((data) => {
      this.homeData = data.results;
    });
  }
}
}


