import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

	private value: string = "Open"
	private time: string = "12:00";
	private date: string = "16 May 2024";

	private prefix: string = "";

	private gradient: string = "from-ascent/15 to-secondary/20";
	private border: string = "border-secondary/30 border-l-primary";

	private gradients = [
		{type: "default", gradient: "from-ascent/15 to-secondary/20", border: "border-secondary/30 border-l-primary"},
		{type: "info", gradient: "from-info-400/15 to-info-500/20", border: "border-info-500/30 border-l-info-500"},
		{type: "success", gradient: "from-success-400/15 to-success-500/20", border: "border-success-500/30 border-l-success-500"},
		{type: "warning", gradient: "from-warning-400/15 to-warning-500/20", border: "border-warning-500/30 border-l-warning-500"},
		{type: "error", gradient: "from-error-500/15 to-error-400/20", border: "border-error-400/30 border-l-error-500"},
	]

	@Input() public set setStatus(i: string) {
		this.gradients.forEach(e => {
			if (e.type == i) {
				this.gradient = e.gradient;
				this.border = e.border;
			}
		});
	}

	public get getValue(): string {
		return this.value;
	}

	public get getTime(): string {
		return this.time;
	}

	public get getDate(): string {
		return this.date;
	}

	public get getPrefix(): string {
		return this.prefix;
	}

	public get getStatus(): string {
		return this.gradient + " " + this.border;
	}

	@Input() public set setTime(v: string) {
		this.time = v;
	}

	@Input() public set setDate(v: string) {
		this.date = v;
	}

	@Input() public set setValue(v: string) {
		this.value = v;
	}

	@Input() public set setPrefix(v: string) {
		this.prefix = v;
	}

}
