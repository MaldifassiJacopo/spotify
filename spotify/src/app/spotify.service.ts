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
        'Bearer BQBlBu5GfxSGN9W9QyUM_R5E72O-SJbZi9lWhKQ3yMH_xosHc9tiYHD_dwfjynZlafo0KV3yt0ebteNcNHqtrj4vJufsggohBpnJ5Qm3XhW8sI3nRxeV37rbwhLazJqfrC06aD75pZMp9i5i1qRnT6nedK2a-NAoIHRvwGzP747eLDpBApSclLt2h96fcoXbgtA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}


