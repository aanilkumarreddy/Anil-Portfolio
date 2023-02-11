import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  generalData: any;
  @Input('generalData') set updategeneralData(generalData: any) {
    this.generalData = generalData;
  }

  navLinks = [
    { location: '/overview', label: 'Overview', icon: 'account_circle' },
    { location: '/experience', label: 'Experience', icon: 'work' },
    { location: '/education', label: 'Education', icon: 'school' },
    { location: '/projects', label: 'Projects', icon: 'assignment' },
    { location: '/volunteering', label: 'Volunteering', icon: 'favorite' },
    { location: '/contact', label: 'Contact', icon: 'email' },
    { location: '/about', label: 'About', icon: 'info' },
  ];

  windowWidth: number = window.innerWidth;

  // initial values, the window object may still be undefined during this hook
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }

  // if screen size changes it'll update
  @HostListener('window:resize', ['$event'])
  resize(event: any): void {
    this.windowWidth = window.innerWidth;
  }

  constructor() {}

  getItems(): void {}

  ngOnInit(): void {
    this.getItems();
  }
}
