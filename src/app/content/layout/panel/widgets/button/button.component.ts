import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  	@Input() value: string = 'LOCKDOWN';
  	@Input() gradient: string = 'bg-gradient-to-br from-error-500 to-error-400 hover:from-error-500/60 hover:to-error-400/60';

}
