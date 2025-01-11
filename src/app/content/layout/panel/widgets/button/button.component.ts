import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  	@Input() value: string = 'UNKNOWN';
    @Input() status: boolean = false;

  	@Input() gradient: string = 'bg-gradient-to-br from-error-500 to-error-400 hover:from-error-500/60 hover:to-error-400/60';

    private colors = [

		{ v: "OPEN", 
					active:     "from-success-500 to-success-400 hover:to-success-400/70",
					nonactive:  "from-light-300/40 to-light-300/40 hover:to-success-400/70",
		},
		{ v: "CLOSE", 
					active:     "from-success-500 to-success-400 hover:to-success-400/70",
					nonactive:  "from-light-300/40 to-light-300/40 hover:to-success-400/70",
		},
		{ v: "UNLOCK", 
					active:     "from-info-500 to-info-400 hover:to-info-400/70",
					nonactive:  "from-light-300/40 to-light-300/40 hover:to-info-400/70",
		},
		{ v: "LOCK", 
					active:     "from-info-500 to-info-400 hover:to-info-400/70",
					nonactive:  "from-light-300/40 to-light-300/40 hover:to-info-400/70",
		},

    ]

	public getGradient(): string {

		const found = this.colors.find(c => c.v === this.value);

		if (found) {

			return this.status ? found.active : found.nonactive;
		}

		return this.gradient;

	}

}
