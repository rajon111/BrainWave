import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEcommerceWebsiteComponent } from './custom-ecommerce-website.component';

describe('CustomEcommerceWebsiteComponent', () => {
  let component: CustomEcommerceWebsiteComponent;
  let fixture: ComponentFixture<CustomEcommerceWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEcommerceWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEcommerceWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
