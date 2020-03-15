import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SregisterComponent } from './sregister.component';

describe('SregisterComponent', () => {
  let component: SregisterComponent;
  let fixture: ComponentFixture<SregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
