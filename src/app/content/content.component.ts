import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

	private version: string = "1.0";

	public get getVersion(): string {
		return this.version;
	}

}
