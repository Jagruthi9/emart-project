import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWomenComponent } from './sub-women.component';

describe('SubWomenComponent', () => {
  let component: SubWomenComponent;
  let fixture: ComponentFixture<SubWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
