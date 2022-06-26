import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBestComponent } from './choose-best.component';

describe('ChooseBestComponent', () => {
  let component: ChooseBestComponent;
  let fixture: ComponentFixture<ChooseBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
