import { Component, OnInit } from '@angular/core';
import {PlacesService} from './places.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []
  
  constructor(
    private placeServices: PlacesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.places = this.placeServices.getPlaces();
  }

  ionViewWillEnter(){
    this.places = this.placeServices.getPlaces();
  }

  addNewPlace(){
    this.router.navigate(['/add']); 
  }

  goToHome(){
    this.router.navigate(["/home"]);
  }

}
