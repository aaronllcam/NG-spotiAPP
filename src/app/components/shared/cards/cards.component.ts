import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() item:any;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showArtist(item:any){
    let artistId:string;
    
    if(item.type === 'artist') artistId = item.id;
    else artistId = item.artists[0].id;

    this.router.navigate(['/artist', artistId]);
  }

}
