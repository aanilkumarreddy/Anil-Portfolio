import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  contactItems;
  title = 'Contact Informations';
  firebaseSubscription: Subscription;
  constructor(private db: AngularFireDatabase) {}

  getItems(): void {
    const project = this.db.object('Contact').valueChanges();
    this.firebaseSubscription = project.subscribe((data: any) => {
      this.contactItems = data;
    });
  }

  ngOnInit(): void {
    this.getItems();
  }

  ngOnDestroy(): void {
    this.firebaseSubscription.unsubscribe();
  }
}
