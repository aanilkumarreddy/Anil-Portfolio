import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experienceItems: any;
  title = 'Professional Experience';
  firebaseSubscription: Subscription;
  constructor(private db: AngularFireDatabase) {
    this.firebaseSubscription = new Subscription();
  }

  getItems(): void {
    const overview = this.db.object('Experience').valueChanges();
    this.firebaseSubscription = overview.subscribe((data: any) => {
      this.experienceItems = data;
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
