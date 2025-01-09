import { Component, Input } from '@angular/core';
import { Room } from 'src/app/entity/room';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent {

	@Input() level: number;
  	@Input() rooms: Room[] = [];


	public get getLevel(): number {
		return this.level;
	}

	/** --- --- --- --- --- --- --- --- --- **/

	public get getRooms() {
		return this.rooms;
	}

}
