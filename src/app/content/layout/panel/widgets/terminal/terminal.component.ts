import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Room } from 'src/app/entity/room';
import { LayoutService } from 'src/app/service/content/layout.service';
import { RoomService } from 'src/app/service/status-bar/room.service';

import { Panel } from 'src/app/interface/panel';
import { Event } from 'src/app/entity/event';

@Component({
  selector: 'widget-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, OnDestroy {

	currentRoom: Room | null = null;
	private sub: Subscription;

	constructor(private layoutService: LayoutService ,private roomService: RoomService) {}

	ngOnInit(): void {

		this.sub = this.roomService.selectedRoom$.subscribe(room => {
			this.currentRoom = room;
		});

		if(this.currentRoom) {
			this.status( this.currentRoom?.status );
		} else {
			this.status(-1);
		}
	}

	ngOnDestroy(): void {
		this.sub?.unsubscribe();
	}

	public openAccessManager(): void {

		if (this.layoutService.isPanel('accessmanager'))  {

			this.layoutService.deletePanel('accessmanager');
			return;
		};

		this.layoutService.addPanel( {id: 'accessmanager', classes: 'row-span-2 col-span-4', isBar: false} );

	}

	/* --- --- --- */

	public status(s: number): void {

		if (!this.currentRoom) { console.warn("No current room selected."); return; }
		
		if (s >= -1 && s <= 3) {
			this.currentRoom.status = s;
		} else {
			console.error("Invalid room status.")
		}

	}

	public resetAlarm(): void {

		if (!this.currentRoom) { console.warn("No current room selected."); return; }
		
		console.info("Alarm is now stoped.")

	}

	public toogleLockdown(): void {

		if (!this.currentRoom) { console.warn("No current room selected."); return; }
		
		this.currentRoom.lockdown = !this.currentRoom.lockdown
		console.info(`Lockdown: ${this.currentRoom.lockdown}.`)

	}

	public toogleMaintance(): void {

		if (!this.currentRoom) { console.warn("No current room selected."); return; }
		
		this.currentRoom.maintance = !this.currentRoom.maintance
			
		console.info(`Maintance: ${this.currentRoom.maintance}.`)

	}

	public get events(): Event[] {
		return this.currentRoom ? this.currentRoom.getEvents() : [];
	}

	public triggerEvent(status: string, prefix: string, value: string): void {
		this.events.push( new Event(status, prefix, value) )
	}
}
