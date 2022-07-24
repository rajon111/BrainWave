import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitrayManagementSystemComponent } from './sanitray-management-system.component';

describe('SanitrayManagementSystemComponent', () => {
  let component: SanitrayManagementSystemComponent;
  let fixture: ComponentFixture<SanitrayManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanitrayManagementSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitrayManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
