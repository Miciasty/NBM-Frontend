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

	replacePanels(newPanels: Panel[]): void {
		this.panelsSubject.next(newPanels);
	}

	clearPanels(): void {
		this.panelsSubject.next([]);
	}
  
}
