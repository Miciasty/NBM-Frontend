import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageGraphComponent } from './usage-graph.component';

describe('UsageGraphComponent', () => {
  let component: UsageGraphComponent;
  let fixture: ComponentFixture<UsageGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsageGraphComponent]
    });
    fixture = TestBed.createComponent(UsageGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
