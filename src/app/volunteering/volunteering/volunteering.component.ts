import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss'],
})
export class VolunteeringComponent implements OnInit {
  volunteerItems: any[] = [];
  title = 'Voluntary Work and Causes';
  firebaseSubscription: Subscription = new Subscription();

  constructor(private db: AngularFireDatabase) {}

  getItems(): void {
    const overview = this.db.object('Volunteering').valueChanges();
    this.firebaseSubscription = overview.subscribe((data: any) => {
      this.volunteerItems = data;
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
