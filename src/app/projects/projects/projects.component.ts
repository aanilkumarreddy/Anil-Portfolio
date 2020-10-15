import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectItems: any;
  title = 'Projects';
  firebaseSubscription: Subscription;
  constructor(private db: AngularFireDatabase) {}

  getItems(): void {
    const project = this.db.object('Projects').valueChanges();
    this.firebaseSubscription = project.subscribe((data: any) => {
      this.projectItems = data;
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
