import { Injectable } from '@angular/core';
import { Room } from 'src/app/entity/room';
import { Time } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

	private rooms: Room[] = [
		new Room('MainBuilding', 1, 'A', "Kitchen_01"),
		new Room('MainBuilding', 1, 'A', "Corridor_01"),
		new Room('MainBuilding', 1, 'A', "Corridor_02"),

		new Room('MainBuilding', 2, 'B', "Restroom_01"),
		new Room('MainBuilding', 2, 'B', "Restroom_01"),
	];

	public getRooms(): Room[] {
		return this.rooms;
	}
	
	public addRoom(room: Room): void {
		this.rooms.push(room);
	}

	public removeRoom(room: Room): void {
		this.rooms = this.rooms.filter(r => r !== room);
	}

	public removeRoomByName(name: string): void {
		this.rooms = this.rooms.filter(r => r.name !== name);
	}

	/* --- */

	private selectedRoomSubject = new BehaviorSubject<Room | null>(null);
	public selectedRoom$ = this.selectedRoomSubject.asObservable();

	public setSelectedRoom(room: Room): void {
		this.selectedRoomSubject.next(room);
	  }
	
	public getSelectedRoom(): Room | null {
		return this.selectedRoomSubject.value;
	}

}
