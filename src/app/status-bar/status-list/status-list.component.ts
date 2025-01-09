import { Component } from '@angular/core';
import { Room } from 'src/app/entity/room';
import { RoomService } from 'src/app/service/status-bar/room.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent {

	private groupedRooms: { level: number; rooms: Room[] }[] = [];

	constructor(private roomService: RoomService) {}

	ngOnInit(): void {
		const allRooms = this.roomService.getRooms();
		this.groupedRooms = this.groupByLevel(allRooms);
	}

	private groupByLevel(rooms: Room[]): { level: number; rooms: Room[] }[] {
		const map = new Map<number, Room[]>();
		rooms.forEach(r => {
		  const lvl = r.level;
		  if (!map.has(lvl)) {
			map.set(lvl, []);
		  }
		  map.get(lvl)?.push(r);
		});
		return Array.from(map.entries()).map(([level, rooms]) => ({ level, rooms }));
	}

	public get getAllRooms(): { level: number; rooms: Room[] }[] {
		return this.groupedRooms;
	}

	public addTestRoom(): void {
		const testRoom = new Room('TestRoom', 10, 'E', "Roum_01");

		this.roomService.addRoom(testRoom);

		this.refreshGroupedRooms();
	}

	public removeRoomByName(roomName: string): void {
		this.roomService.removeRoomByName(roomName);

		this.refreshGroupedRooms();
	}

	private refreshGroupedRooms(): void {
		const allRooms = this.roomService.getRooms();
		this.groupedRooms = this.groupByLevel(allRooms);
	}
  
}
