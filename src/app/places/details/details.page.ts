import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  place: Place;

  constructor(
    private activeteRoute: ActivatedRoute,
    private placesServices: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activeteRoute.paramMap.subscribe(paramMap => {
      //validate
      const recipeId = paramMap.get('placeId')
      console.log(recipeId)
      this.place = this.placesServices.getPlace(recipeId);
      console.log(this.place)
    })
  }
  async deletePlace() {

    const alertElement =await this.alertCtrl.create({
      header: "Esta apunto de eliminar un item",
      message: 'Confirma',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesServices.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    });
    
    await alertElement.present();
  }

}
