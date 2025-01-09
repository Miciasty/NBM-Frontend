import { Component } from '@angular/core';
import { Panel } from 'src/app/interface/panel';
import { LayoutService } from 'src/app/service/content/layout.service';

@Component({
  selector: 'c-grid-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {

	private panels: Panel[] = []

	constructor( private layoutService: LayoutService) {}

	ngOnInit() {
		this.layoutService.panels$.subscribe(newPanels => {
			this.panels = newPanels;
		})
	}

	public get getPanels() {
		return this.panels;
	}

	public removePanel(id: string): void {
		this.panels = this.panels.filter(panel => panel.id !== id);
	}

	public clearPanels(): void {
		this.layoutService.clearPanels();
	}

}
