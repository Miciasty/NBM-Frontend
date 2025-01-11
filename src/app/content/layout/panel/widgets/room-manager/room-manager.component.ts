import { Component } from '@angular/core';
import { Room } from 'src/app/entity/room';
import { RoomService } from 'src/app/service/status-bar/room.service';

@Component({
  selector: 'app-room-manager',
  templateUrl: './room-manager.component.html',
  styleUrls: ['./room-manager.component.scss']
})
export class RoomManagerComponent {

	public roomId: number | null;
	public roomLevel: number | null;
	public roomSector: string;
	public roomName: string;

  	constructor(private roomService: RoomService) {}

	ngOnInit(): void {}

	public addRoom(): void {

        if ( this.roomLevel === null || !this.roomSector || !this.roomName) {
            console.error("All fields are required to add a room.");
            return;
        }

		const allRooms = this.roomService.getRooms();

		const maxId = allRooms.length > 0 ? Math.max(...allRooms.map(r => r.id)) : -1;
		const newId = maxId + 1;

        const newRoom = new Room(
            newId,
            'MainBuilding',
            this.roomLevel,
            this.roomSector,
            this.roomName,
            1
        );

        this.roomService.addRoom(newRoom);

        this.resetForm();
    }

	public updateRoom(): void {

        if (this.roomId === null) {
            console.error("Room ID is required for update.");
            return;
        }

        const updatedRoom: Partial<Room> = {
            level: this.roomLevel ?? undefined,
            sector: this.roomSector || undefined,
            name: this.roomName || undefined
        };

        this.roomService.updateRoomById(this.roomId, updatedRoom);

        this.resetForm();
    }

	public deleteRoom(): void {

        if (this.roomId === null) {
            console.error("Room ID is required for deletion.");
            return;
        }

        this.roomService.removeRoomById(this.roomId);

        this.resetForm();
    }

	private resetForm(): void {
        this.roomId = null;
        this.roomLevel = null;
        this.roomSector = '';
        this.roomName = '';
    }

}
