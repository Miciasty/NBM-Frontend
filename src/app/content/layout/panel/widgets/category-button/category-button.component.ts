import { Component, Input } from '@angular/core';
import { CategoryDataService } from 'src/app/service/content/category-data.service';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent {

  	@Input() type: string = "unknown";

  	private title: string = "Unknown";
	private description: string = "Unknown";

	private color1: string = '#FFF';
	private color2: string = '#FFF';
	private color3: string = '#FFF';
	private color4: string = '#FFF';

	constructor(private categoryService: CategoryDataService) {}

	ngOnInit(): void {
		this.loadData();
	}

	private loadData(): void {
		this.categoryService.getDataByType(this.type).subscribe(data => {
			this.title = data.title;
			this.description = data.description;
			this.color1 = data.color1;
			this.color2 = data.color2;
			this.color3 = data.color3;
			this.color4 = data.color4;
		})
	}

	/** --- --- --- --- --- **/

	public getColor1(): string {
		return this.color1 ?? '#000'; 
	}

	public getColor2(): string {
		return this.color2 ?? '#000'; 
	}

	public getColor3(): string {
		return this.color3 ?? '#000'; 
	}

	public getColor4(): string {
		return this.color4 ?? '#000'; 
	}

	public get getTitle(): string {
		return this.title;
	}

	public get getDescription(): string {
		return this.description;
	}
}
