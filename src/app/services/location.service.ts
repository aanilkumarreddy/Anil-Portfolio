import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private db: AngularFireDatabase) {}

  getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (resp) => {
            resolve({
              longitude: resp.coords.longitude,
              latitude: resp.coords.latitude,
              accuracy: resp.coords.accuracy,
            });
          },
          (err) => {
            reject(err);
          },
          {
            enableHighAccuracy: true,
          }
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

  sendLocationDataToFirebase(): void {
    timer(0, 3600000).subscribe(() => {
      this.getLocation().then((location) => {
        this.db.object('geolocation').update(location);
      });
    });
  }
}
