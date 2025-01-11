import { Injectable } from '@angular/core';
import { Room } from 'src/app/entity/room';
import { Time } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

	private rooms: Room[] = [
		new Room(0, 'MainBuilding', 0, 'N', "Security_01", 1),

		new Room(1, 'MainBuilding', 1, 'A', "Kitchen_01", 1),

		new Room(2, 'MainBuilding', 2, 'B', "Corridor_02", 1),
	];

	public getRooms(): Room[] {
		return this.rooms;
	}
	
	public addRoom(room: Room): void {
		this.rooms.push(room);
		this.roomsSubject.next([...this.rooms]);
	}

	public updateRoomById(id: number, updatedRoom: Partial<Room>): void {
        const index = this.rooms.findIndex(r => r.id === id);
        if (index === -1) {
            console.error(`Room with ID ${id} not found.`);
            return;
        }

        this.rooms[index] = { ...this.rooms[index], ...updatedRoom } as Room;
        this.roomsSubject.next([...this.rooms]); 

        const selectedRoom = this.selectedRoomSubject.value;
        if (selectedRoom && selectedRoom.id === id) {
            this.selectedRoomSubject.next(this.rooms[index]);
        }
    }

	public removeRoomById(id: number): void {
        const index = this.rooms.findIndex(r => r.id === id);
        if (index === -1) {
            console.error(`Room with ID ${id} not found.`);
            return;
        }
        const removedRoom = this.rooms.splice(index, 1)[0];
        this.roomsSubject.next([...this.rooms]); 
		
        const selectedRoom = this.selectedRoomSubject.value;
        if (selectedRoom && selectedRoom.id === id) {
            this.selectedRoomSubject.next(null);
        }
    }

	public removeRoom(room: Room): void {
		this.rooms = this.rooms.filter(r => r !== room);
	}

	public removeRoomByName(name: string): void {
		this.rooms = this.rooms.filter(r => r.name !== name);
	}

	/* */

	public isRoomExists(id: number): boolean {
        return this.rooms.some(r => r.id === id);
    }

	/* --- */

	private roomsSubject = new BehaviorSubject<Room[]>(this.rooms);
	public rooms$ = this.roomsSubject.asObservable();

	private selectedRoomSubject = new BehaviorSubject<Room | null>(null);
	public selectedRoom$ = this.selectedRoomSubject.asObservable();

	public setSelectedRoom(room: Room): void {
		this.selectedRoomSubject.next(room);
	  }
	
	public getSelectedRoom(): Room | null {
		return this.selectedRoomSubject.value;
	}

	public updateRoomStatus(room: Room, status: number): void {
		const index = this.rooms.findIndex(r => r === room);
		if (index !== -1) {
		  this.rooms[index].status = status;
		  this.roomsSubject.next(this.rooms);
		  this.selectedRoomSubject.next(this.rooms[index]);
		}
	}
	
	public updateRoomLockdown(room: Room, lockdown: boolean): void {
		const index = this.rooms.findIndex(r => r === room);
		if (index !== -1) {
		  this.rooms[index].lockdown = lockdown;
		  this.roomsSubject.next(this.rooms);
		  this.selectedRoomSubject.next(this.rooms[index]);
		}
	}
	
	public updateRoomMaintenance(room: Room, maintenance: boolean): void {
		const index = this.rooms.findIndex(r => r === room);
		if (index !== -1) {
		  this.rooms[index].maintance = maintenance;
		  this.roomsSubject.next(this.rooms);
		  this.selectedRoomSubject.next(this.rooms[index]);
		}
	}

}
