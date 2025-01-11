import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Panel } from 'src/app/interface/panel';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {

	private panelsSubject = new BehaviorSubject<Panel[]>([]);

	panels$ = this.panelsSubject.asObservable();

	addPanels(panels: Panel[]): void {
		const currentPanels = this.panelsSubject.getValue();
		this.panelsSubject.next([...currentPanels, ...panels]);
	}

	addPanel(panel: Panel): void {
		const currentPanels = this.panelsSubject.getValue();
		currentPanels.push(panel);

		this.panelsSubject.next([...currentPanels]);
	}

	deletePanel(id: string): void {

		if (!this.isPanel(id)) return;

		const currentPanels = this.panelsSubject.getValue();

		const updatedPanels = currentPanels.filter(panel => panel.id !== id);
  		this.panelsSubject.next(updatedPanels);
	}

	isPanel(id: string): boolean {
		const currentPanels = this.panelsSubject.getValue();

		return currentPanels.some(p => p.id === id);
	}

	replacePanels(newPanels: Panel[]): void {
		this.panelsSubject.next(newPanels);
		this.deletePanel('accessmanager');
	}

	clearPanels(): void {
		this.panelsSubject.next([]);
	}
  
}
