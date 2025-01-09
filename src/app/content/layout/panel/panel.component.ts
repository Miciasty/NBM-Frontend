import { Component, ComponentRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TerminalComponent } from './widgets/terminal/terminal.component';
import { UsageGraphComponent } from './widgets/usage-graph/usage-graph.component';
import { QualityGraphComponent } from './widgets/quality-graph/quality-graph.component';
import { CategoryButtonComponent } from './widgets/category-button/category-button.component';

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
	  };

	ngOnInit() {
		this.loadComponent(this.type);
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
			console.log('Assigned type to UsageGraphComponent:', type);
		}

		const element = this.currentComponentRef.location.nativeElement;
  		element.classList.add('overflow-hidden');

	}

}
