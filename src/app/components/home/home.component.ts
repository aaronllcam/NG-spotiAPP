import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from './../../services/spotyfy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading:boolean = true;
  error:boolean = false;

  constructor( private spotify: SpotyfyService) {

    this.spotify.getNewReleases()
                .subscribe((res: any) => {
                  this.newReleases = res;
                  this.loading = false;
                }, (err) => {
                  this.error = true;
                  console.log(err);
                });

   }

  ngOnInit(): void {
  }

}
