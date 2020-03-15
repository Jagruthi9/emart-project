import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbuyerComponent } from './ibuyer.component';

describe('IbuyerComponent', () => {
  let component: IbuyerComponent;
  let fixture: ComponentFixture<IbuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
