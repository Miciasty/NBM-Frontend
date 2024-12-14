import { Component, EventEmitter, Output } from '@angular/core';

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

}
