import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //chiave API (personale)
  private key = 'pub_204630553b599a87fbd4362f40e022134c3a7';

  Url1 = 'https://newsdata.io/api/1/news?apikey=' + this.key + '&country=it';
  Urlscienza = 'https://newsdata.io/api/1/news?apikey=' + this.key + '&country=it&category=science';
  Urlsport = 'https://newsdata.io/api/1/news?apikey=' + this.key + '&country=it&category=sport';
  Urltec = 'https://newsdata.io/api/1/news?apikey=' + this.key + '&country=it&category=technology';

  constructor(private httpClient: HttpClient) { 
}

  main(pag: any): Observable<any> {
    let Url1pg = this.Url1 + '&page=' + pag;
    return this.httpClient.get(Url1pg);
  }

  scienza(pag: any): Observable<any> {
    let Urlscienzapg = this.Urlscienza + '&page=' + pag;
    return this.httpClient.get(Urlscienzapg);
  }

  sport(pag: any): Observable<any> {
    let Urlsportpg = this.Urlsport + '&page=' + pag;
    return this.httpClient.get(Urlsportpg);
  }

  tecnologia(pag: any): Observable<any> {
    let Urltecpg = this.Urltec + '&page=' + pag;
    return this.httpClient.get(Urltecpg);
  }

}
