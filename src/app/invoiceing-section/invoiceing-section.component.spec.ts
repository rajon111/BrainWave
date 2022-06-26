import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceingSectionComponent } from './invoiceing-section.component';

describe('InvoiceingSectionComponent', () => {
  let component: InvoiceingSectionComponent;
  let fixture: ComponentFixture<InvoiceingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
