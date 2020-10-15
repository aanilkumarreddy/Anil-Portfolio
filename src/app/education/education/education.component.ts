import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationItems: any[];
  certificationItems: any[];
  languageItems;
  title = 'Education and Certificates';

  constructor(private db: AngularFireDatabase) {}

  getItems(): void {
    const itemRefForProfile = this.db.object('Education').valueChanges();
    itemRefForProfile.subscribe((data: any) => {
      this.certificationItems = data.CertificationItems;
      this.educationItems = data.EducationItems;
      this.languageItems = data.LanguageItems;
    });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
