import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Room } from 'src/app/entity/room';
import { RoomService } from 'src/app/service/status-bar/room.service';

@Component({
  selector: 'widget-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, OnDestroy {

	currentRoom: Room | null = null;
	private sub: Subscription;

	constructor(private roomService: RoomService) {}

	ngOnInit(): void {
		this.sub = this.roomService.selectedRoom$.subscribe(room => {
			this.currentRoom = room;
		});
	}

	ngOnDestroy(): void {
		this.sub?.unsubscribe();
	}
}
