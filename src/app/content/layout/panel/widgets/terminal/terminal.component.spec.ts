import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalComponent } from './terminal.component';
import { ButtonComponent } from '../button/button.component';
import { EventComponent } from '../event/event.component';

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let fixture: ComponentFixture<TerminalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalComponent, ButtonComponent, EventComponent]
    });
    fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
