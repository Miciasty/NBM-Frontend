import { Component } from '@angular/core';

@Component({
  selector: 'c-grid-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

	private panels = [
		
		{ id: 4, classes: 'row-span-6 col-span-3' },
		{ id: 1, classes: 'row-span-2 col-span-2' },
		{ id: 3, classes: 'row-span-4 col-span-2' },
	]

	public get getPanels() {
		return this.panels;
	}

	public removePanel(id: number): void {
		this.panels = this.panels.filter(panel => panel.id !== id);
	}

	public addPanel(): void {
		const nid = this.panels.length ? Math.max(...this.panels.map(p => p.id)) + 1 : 1;
		this.panels.push({ id: nid, classes: 'row-span-2 col-span-2'});
	}

}
