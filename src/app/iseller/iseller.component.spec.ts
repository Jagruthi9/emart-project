import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsellerComponent } from './iseller.component';

describe('IsellerComponent', () => {
  let component: IsellerComponent;
  let fixture: ComponentFixture<IsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
