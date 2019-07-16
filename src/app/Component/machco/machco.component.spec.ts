import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachcoComponent } from './machco.component';

describe('MachcoComponent', () => {
  let component: MachcoComponent;
  let fixture: ComponentFixture<MachcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
