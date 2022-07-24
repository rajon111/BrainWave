import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainManagementSystemComponent } from './supply-chain-management-system.component';

describe('SupplyChainManagementSystemComponent', () => {
  let component: SupplyChainManagementSystemComponent;
  let fixture: ComponentFixture<SupplyChainManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyChainManagementSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyChainManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
