import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  pToggle = false;

  onToggle = () => {
    this.pToggle = !this.pToggle;
  }
}
