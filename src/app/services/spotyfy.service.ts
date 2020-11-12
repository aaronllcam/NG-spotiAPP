import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotyfyService {

  private token:string = 'Bearer BQCZP25uzEcXiK2dq5AXQZ4TZqCGsGar5XWXB1jmTxOAkXgsroowAn5p08Cy7A5ft1eELv6wquVtVq67O44';
  private baseUrl:string = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url: string = `${this.baseUrl}${query}`;

    const headers = new HttpHeaders({
      'Authorization': this.token
    })

    return this.http.get(url, { headers } );
  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases').pipe( map( res => res['albums'].items) );
                    
  }

  getArtist(artist:string){
    
    return this.getQuery(`search?q=${artist}&type=artist`).pipe( map( res => res['artists'].items) );
    
  }

  getArtistById(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map( res => res['tracks']) );;

  }
  
}
