import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactItems: any = {};
  title = 'Contact Informations';
  firebaseSubscription: Subscription = new Subscription();
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
