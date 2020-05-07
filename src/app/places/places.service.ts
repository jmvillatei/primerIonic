import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Torre',
      imgUrl: 'https://images.alphacoders.com/905/905423.jpg',
      comments: ['Torre de paris', 'Francia']
    },
    {
      id: '2',
      title: 'Estatua',
      imgUrl: 'https://images2.alphacoders.com/946/946722.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imgUrl: string) {
    this.places.push({
      title,
      imgUrl,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId 
    })
  }



}
