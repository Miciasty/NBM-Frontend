import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityGraphComponent } from './quality-graph.component';

describe('QualityGraphComponent', () => {
  let component: QualityGraphComponent;
  let fixture: ComponentFixture<QualityGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityGraphComponent]
    });
    fixture = TestBed.createComponent(QualityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
