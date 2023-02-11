import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css'],
})
export class CvItemComponent implements OnInit {
  @Input() cvItem: any;

  constructor() {}

  ngOnInit(): void {}

  toggleDetails(event: any): void {
    const card = event.target.closest('mat-card');
    if (card.classList.contains('opened')) {
      card.classList.add('closed');
      card.classList.remove('opened');
    } else {
      card.classList.add('opened');
      card.classList.remove('closed');
    }
  }
}
