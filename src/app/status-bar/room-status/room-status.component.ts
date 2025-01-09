import { Component, Input } from '@angular/core';
import { Room } from 'src/app/entity/room';
import { CategoryDataService } from 'src/app/service/content/category-data.service';
import { LayoutService } from 'src/app/service/content/layout.service';
import { RoomService } from 'src/app/service/status-bar/room.service';

@Component({
  selector: 'app-room-status',
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.scss']
})
export class RoomStatusComponent {

  	constructor( private categoryService: CategoryDataService, private layoutService: LayoutService, private roomService: RoomService ) {}

  	@Input() room: Room;

  	public onButtonClick(): void {

		this.roomService.setSelectedRoom(this.room);

		this.categoryService.getDataByType('map').subscribe((data) => {
			if (data.panels) {
			  	this.layoutService.replacePanels(data.panels);
			}
		});

	}


  	public get getRoomName(): string {
    	return this.room?.name ?? 'Unknown';
  	}	

  	public get getLevel(): number {
    	return this.room?.level ?? '-1';
  	}

  	public get getSector(): string {
    	return this.room?.sector ?? 'Unknown';
  	}

  	public get getStatus(): number {
    	return this.room?.status ?? '0';
  	}

  	public get getConnection(): string {
    	return "ONLINE";
  	}

}
