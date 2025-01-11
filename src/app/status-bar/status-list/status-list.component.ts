import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Room } from 'src/app/entity/room';
import { RoomService } from 'src/app/service/status-bar/room.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent {

	private groupedRooms: { level: number; rooms: Room[] }[] = [];
	private roomsSubscription!: Subscription;

	constructor(private roomService: RoomService) {}

	ngOnInit(): void {
		this.roomsSubscription = this.roomService.rooms$.subscribe(rooms => {
            this.groupedRooms = this.groupByLevel(rooms);
        });
	}

	ngOnDestroy(): void {
        if (this.roomsSubscription) {
            this.roomsSubscription.unsubscribe();
        }
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
		const testRoom = new Room(999, 'TestRoom', 10, 'E', "Roum_01", 0);

		this.roomService.addRoom(testRoom);
	}

	public removeRoomByName(roomName: string): void {
		this.roomService.removeRoomByName(roomName);
	}
  
}
