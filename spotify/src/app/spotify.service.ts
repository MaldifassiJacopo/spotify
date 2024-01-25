import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB4IJj56_w2TFQ9QrJ2av1T6Ip6sDHDZxwFrSG_FWsHVt5r9G349W0AOP_g1SKsqIwfAd37YoDgcyOS9meOOoKkuhxDJ2jjQgiHah93YFjVeiyew3tnroAAtX7aUzAksZGV7tqZFP2uc70IN--bHTc1fD0UzIb8SqyKvhSWNfSSUcDoBzI'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}


