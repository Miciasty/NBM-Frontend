import { Component } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent {

	private level: number = 1;
	
	private n: number = 1;
	private rooms = Array.from({length: this.n});

	public get getLevel(): number {
		return this.level;
	}

	/** --- --- --- --- --- --- --- --- --- **/

	public get getRooms() {
		return this.rooms;
	}

}
