import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubKidComponent } from './sub-kid.component';

describe('SubKidComponent', () => {
  let component: SubKidComponent;
  let fixture: ComponentFixture<SubKidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubKidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
