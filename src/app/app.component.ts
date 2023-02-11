import { ManualSpinnyService } from './services/manual-spinny.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  countObservable: Subscription;
  count: number;
  firebaseSubscription: Subscription;
  generalData: any;

  constructor(
    private titleService: Title,
    private db: AngularFireDatabase,
    private manualSpinny: ManualSpinnyService
  ) {
    this.manualSpinny.spin$.next(true);
    this.count = 0;
    this.countObservable = new Subscription();
    this.firebaseSubscription = new Subscription();
  }

  ngOnInit(): void {
    const itemRefForProfile = this.db.object('profile').valueChanges();
    this.firebaseSubscription = itemRefForProfile.subscribe((data: any) => {
      this.setTitle((data || {}).display_name);
      this.manualSpinny.spin$.next(false);
    });

    const countData = this.db.object('users').valueChanges();
    this.countObservable = countData.subscribe((data: any) => {
      this.count = 1 + parseInt((data || {}).count, 10);
    });

    setTimeout(() => {
      const itemRef = this.db.object('users');
      itemRef.set({ count: 1 + +this.count });
    }, 5000);
  }

  setTitle(newTitle: string): void {
    const name = newTitle ? newTitle : 'Anil';
    this.generalData = name;
    this.titleService.setTitle(name);
  }

  ngOnDestroy(): void {
    if (this.firebaseSubscription) {
      this.firebaseSubscription.unsubscribe();
    }
    if (this.countObservable) {
      this.countObservable.unsubscribe();
    }
  }
}
