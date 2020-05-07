import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(
    private placesServices: PlacesService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  savePlace(title, imgUrl){
    this.placesServices.addPlace(title.value, imgUrl.value);
    this.router.navigate(['/places']);
  }

}
