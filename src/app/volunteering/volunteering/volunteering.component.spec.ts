import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringComponent } from './volunteering.component';

describe('VolunteeringComponent', () => {
  let component: VolunteeringComponent;
  let fixture: ComponentFixture<VolunteeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VolunteeringComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
