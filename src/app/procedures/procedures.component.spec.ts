import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresComponent } from './procedures.component';

describe('ProceduresComponent', () => {
  let component: ProceduresComponent;
  let fixture: ComponentFixture<ProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
