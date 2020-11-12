import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyfyService } from '../../services/spotyfy.service';



@Component({
  selector: 'app-single-artist',
  templateUrl: './single-artist.component.html',
  styleUrls: ['./single-artist.component.css']
})
export class SingleArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading:boolean = true;

  constructor(private activatedRoute:ActivatedRoute,
              private spotifyService:SpotyfyService) {

      this.activatedRoute.params.subscribe(params => {
        this.getArtist(params.id);
        this.getTopTracks(params.id);
      });

      
   }

  ngOnInit(): void {
  }

  getArtist(id:string){
    this.spotifyService.getArtistById(id).subscribe(artist => {
      this.artist = artist;
      console.log(this.artist);
      this.loading=false;
    })
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;

    })
  }

}
