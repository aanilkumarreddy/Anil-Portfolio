import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ManualSpinnyService {
  spinnerTopRef = this.cdkSpinnerCreate();

  spin$: Subject<boolean> = new Subject();

  constructor(private overlay: Overlay) {
    this.spin$.subscribe((res) => {
      if (res) {
        // tslint:disable-next-line: no-unused-expression
        this.spinnerTopRef.hasAttached() ? this.stopSpinner() : null;
        this.showSpinner();
      } else {
        this.stopSpinner();
      }
    });
  }

  private cdkSpinnerCreate(): any {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  showSpinner(): void {
    this.spinnerTopRef.attach(new ComponentPortal(MatProgressSpinner));
  }

  stopSpinner(): void {
    this.spinnerTopRef.detach();
  }
}
