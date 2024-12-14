import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListComponent } from './status-list.component';
import { RoomStatusComponent } from '../room-status/room-status.component';
import { ListCategoryComponent } from '../list-category/list-category.component';

describe('StatusListComponent', () => {
  let component: StatusListComponent;
  let fixture: ComponentFixture<StatusListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusListComponent, RoomStatusComponent, ListCategoryComponent]
    });
    fixture = TestBed.createComponent(StatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
