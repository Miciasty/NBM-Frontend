import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
import { TerminalComponent } from './widgets/terminal/terminal.component';
import { QualityGraphComponent } from './widgets/quality-graph/quality-graph.component';
import { UsageGraphComponent } from './widgets/usage-graph/usage-graph.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelComponent, 
        TerminalComponent,

        QualityGraphComponent,
        UsageGraphComponent,

      ]
    });
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
