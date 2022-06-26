import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSolutionComponent } from './invoice-solution.component';

describe('InvoiceSolutionComponent', () => {
  let component: InvoiceSolutionComponent;
  let fixture: ComponentFixture<InvoiceSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
