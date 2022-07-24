import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionForIndustryComponent } from './solution-for-industry.component';

describe('SolutionForIndustryComponent', () => {
  let component: SolutionForIndustryComponent;
  let fixture: ComponentFixture<SolutionForIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionForIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionForIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
