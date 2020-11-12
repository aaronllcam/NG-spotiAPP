import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from './../../services/spotyfy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading:boolean;

  constructor(private spotifyService: SpotyfyService) { }

  ngOnInit(): void {
  }

  search(artist:string){

    this.loading = true;

    this.spotifyService.getArtist(artist)
                        .subscribe((res:any) => {
                          this.artists = res;
                          this.loading = false;
                        });
  }

}
