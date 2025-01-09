import { Component, OnInit } from '@angular/core';
import { Panel } from 'src/app/interface/panel';
import { LayoutService } from 'src/app/service/content/layout.service';

import { 
	trigger, 
	transition, 
	style, 
	animate 
  } from '@angular/animations';

@Component({
  selector: 'c-grid-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],

  animations: [
    trigger('panelAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('75ms ease-out', 
          style({ opacity: 1, transform: 'scale(1)' }))
      ]),
    ])
  ],

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

	trackByPanel(index: number, panel: Panel) {
		return panel.id || index;
	  }

}
