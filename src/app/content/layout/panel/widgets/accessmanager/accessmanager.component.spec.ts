import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessmanagerComponent } from './accessmanager.component';

describe('AccessmanagerComponent', () => {
  let component: AccessmanagerComponent;
  let fixture: ComponentFixture<AccessmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessmanagerComponent]
    });
    fixture = TestBed.createComponent(AccessmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
