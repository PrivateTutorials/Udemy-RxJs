import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAngularComponent } from './welcome-angular.component';

describe('WelcomeAngularComponent', () => {
  let component: WelcomeAngularComponent;
  let fixture: ComponentFixture<WelcomeAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Udemy-Reactive'`, () => {
    expect(component.title).toEqual('Udemy-Reactive');
  });
});
