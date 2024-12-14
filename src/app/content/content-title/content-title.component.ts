import { Component } from '@angular/core';

@Component({
	selector: 'c-content-title',
	templateUrl: './content-title.component.html',
	styleUrls: ['./content-title.component.scss']
})
export class ContentTitleComponent {

	private building: string = "Factory 18";
  	private company: string = "Aegis Industries";

	public get getBuilding(): string {
		return this.building.toUpperCase();
	}

	public get getCompany(): string {
		return this.company.toUpperCase();
	}

}
