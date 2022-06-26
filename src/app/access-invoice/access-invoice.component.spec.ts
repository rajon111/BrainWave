import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessInvoiceComponent } from './access-invoice.component';

describe('AccessInvoiceComponent', () => {
  let component: AccessInvoiceComponent;
  let fixture: ComponentFixture<AccessInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
