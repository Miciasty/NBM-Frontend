import { Component, ComponentRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TerminalComponent } from './widgets/terminal/terminal.component';
import { UsageGraphComponent } from './widgets/usage-graph/usage-graph.component';
import { QualityGraphComponent } from './widgets/quality-graph/quality-graph.component';
import { CategoryButtonComponent } from './widgets/category-button/category-button.component';
import { Subscription } from 'rxjs';
import { RoomService } from 'src/app/service/status-bar/room.service';
import { Room } from 'src/app/entity/room';
import { AccessmanagerComponent } from './widgets/accessmanager/accessmanager.component';
import { RoomManagerComponent } from './widgets/room-manager/room-manager.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

	@Output() closed = new EventEmitter<void>();

	public onClose(): void {
		this.closed.emit();
	}

	public currentRoom: Room | null = null;
  	private sub: Subscription;

	/** --- --- --- --- **/

	private bar: string = "";
	private type: string = "";

	@Input() public set setType(n: string) {
		this.type = n;
	}

	@Input() public set isBar(i: boolean) {
		if (i == false) {
			this.bar = "hidden";
		} else {
			this.bar = "";
		}
	}

	public get getBar(): string {
		return this.bar;
	}

	public get getType(): string {
		return this.type;
	}

	public get getRows(): string {
		if (this.bar == "hidden") {
			return "grid-rows-[auto_1fr]";
		} else {
			return "grid-rows-[auto_auto_1fr]";
		}
	}

	/** --- --- --- --- **/

	@ViewChild('widget', { read: ViewContainerRef, static: true})
	container!: ViewContainerRef;

	private currentComponentRef?: ComponentRef<any>;

	private componentMap: { [key: string]: any } = {
		terminal: TerminalComponent,
		energy: UsageGraphComponent,
		water: UsageGraphComponent,
		air: UsageGraphComponent,
		heat: UsageGraphComponent,
		home: CategoryButtonComponent,
		insight: CategoryButtonComponent,
		safety: CategoryButtonComponent,
		map: CategoryButtonComponent,
		access: CategoryButtonComponent,
		alerts: CategoryButtonComponent,
		accessmanager: AccessmanagerComponent,
		roommanager: RoomManagerComponent,
	};

	constructor(private roomService: RoomService) {}

	ngOnInit() {

		this.sub = this.roomService.selectedRoom$.subscribe(room => {
			this.currentRoom = room;
		});

		this.loadComponent(this.type);
	}

	public getRoomStatus(status: number | undefined): string {
		switch(status) {
		  case 0:
			return 'OPEN';
		  case 1:
			return 'CLOSE';
		  case 2:
			return 'UNLOCK';
		  case 3:
			return 'LOCK';
		  default:
			return 'UNKNOWN';
		}
	}

	private loadComponent(type: string): void {
		if (this.currentComponentRef) {
			this.currentComponentRef.destroy();
		}

		const componentToLoad = this.componentMap[type];
		if (!componentToLoad) {
			console.error(`Unknown widget type: ${type}`);
			return;
		}

		this.currentComponentRef = this.container.createComponent(componentToLoad);

		if (this.currentComponentRef.instance && 'type' in this.currentComponentRef.instance) {
			this.currentComponentRef.instance.type = type;
		}

		const element = this.currentComponentRef.location.nativeElement;
  		element.classList.add('overflow-hidden');

	}

}
