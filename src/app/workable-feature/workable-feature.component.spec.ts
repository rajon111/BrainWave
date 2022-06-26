import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkableFeatureComponent } from './workable-feature.component';

describe('WorkableFeatureComponent', () => {
  let component: WorkableFeatureComponent;
  let fixture: ComponentFixture<WorkableFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkableFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkableFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
