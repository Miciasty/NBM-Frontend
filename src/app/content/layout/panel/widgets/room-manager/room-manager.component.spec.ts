import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomManagerComponent } from './room-manager.component';
import { ButtonComponent } from '../button/button.component';

describe('RoomManagerComponent', () => {
  let component: RoomManagerComponent;
  let fixture: ComponentFixture<RoomManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomManagerComponent, ButtonComponent]
    });
    fixture = TestBed.createComponent(RoomManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
