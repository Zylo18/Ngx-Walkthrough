import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxWalkthroughService {

  private walkthroughState$ = new BehaviorSubject(new WalkthroughState());
  public readonly walkthroughState: Observable<WalkthroughState> = this.walkthroughState$.asObservable();

  constructor() { }

  nextStep() {
    const newSate = Object.assign({}, this.walkthroughState$.getValue());
    newSate.currentStepIndex !== newSate.totalSteps ? 
    newSate.currentStepIndex++ : null;
    this.walkthroughState$.next(newSate);
    console.log(newSate)
  }

  prevStep() {
    const newSate = Object.assign({}, this.walkthroughState$.getValue());
    newSate.currentStepIndex !== 0 ? 
    newSate.currentStepIndex-- : null;
    this.walkthroughState$.next(newSate);
    console.log(newSate)
  }

  getCurrentStepIndex() {
    return this.walkthroughState$.value.currentStepIndex;
  }
}

export class WalkthroughState {
  currentStepIndex: number = 0;
  totalSteps: number;
}
