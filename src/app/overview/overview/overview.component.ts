import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  title = 'Overview';
  generalData: any;
  interests: any;

  firebaseSubscription: Subscription;
  constructor(private db: AngularFireDatabase) {
    this.firebaseSubscription = new Subscription();
  }

  getItems(): void {
    const overview = this.db.object('Overview').valueChanges();
    this.firebaseSubscription = overview.subscribe((data: any) => {
      this.generalData = data;
      this.interests = data.intrests;
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
