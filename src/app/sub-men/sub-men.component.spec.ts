import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenComponent } from './sub-men.component';

describe('SubMenComponent', () => {
  let component: SubMenComponent;
  let fixture: ComponentFixture<SubMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
