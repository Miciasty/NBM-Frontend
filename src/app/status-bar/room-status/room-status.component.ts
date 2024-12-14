import { Component } from '@angular/core';

@Component({
  selector: 'app-room-status',
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.scss']
})
export class RoomStatusComponent {

  private roomName: string = "Kitchen_02";
  private level: string = "Level 1";
  private sector: string = "Sector A";
  private status: string = "ONLINE";

  public get getRoomName(): string {
    return this.roomName;
  }

  public get getLevel(): string {
    return this.level;
  }

  public get getSector(): string {
    return this.sector;
  }

  public get getStatus(): string {
    return this.status;
  }

}
