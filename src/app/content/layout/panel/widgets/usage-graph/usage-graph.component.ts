import { Component, Input, OnChanges } from '@angular/core';
import { UsageGraphData } from 'src/app/interface/usage-graph-data';
import { GraphDataService } from 'src/app/service/content/graph-data.service';

@Component({
  selector: 'app-usage-graph',
  templateUrl: './usage-graph.component.html',
  styleUrls: ['./usage-graph.component.scss']
})
export class UsageGraphComponent {

	@Input() type: string = "unknown";

	private title: string = "Unknown widget";
	private primaryMetrics: UsageGraphData[] = [];
	private secondaryMetrics: UsageGraphData[] = [];

	private gradient: string = 'from-light-200 to-light-100'

	constructor(private graphService: GraphDataService) {}

	ngOnInit(): void {
		this.loadData();
	}

	private loadData(): void {
		this.graphService.getDataByType(this.type).subscribe(data => {
			this.title = data.title;
			this.gradient = data.gradient;
			this.primaryMetrics = data.primary;
			this.secondaryMetrics = data.secondary;
		});
	}

	/** --- --- --- --- --- **/

	public get getTitle(): string {
		return this.title;
	}

	public get getGradient(): string {
		return this.gradient;
	}

	public get getPrimaryMetrics(): UsageGraphData[] {
		return this.primaryMetrics;
	}

	public get getSecondaryMetrics(): UsageGraphData[] {
		return this.secondaryMetrics;
	}
}
