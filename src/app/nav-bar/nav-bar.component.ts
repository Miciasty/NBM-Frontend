import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    
    private n: number = 4;
    private buttons = Array.from({length: this.n});

    public get getButtons() {
      return this.buttons;
    }

}
