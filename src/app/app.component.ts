import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'text';
  bgToggle = false;
  customStyle = {
    width: '200px',
    padding: '0.125rem 1rem',
    lineHeight: '1',
    borderRadius: '5px',
    border: '1px solid #333',
    background: this.bgToggle ? 'red' : 'blue',
  };

  onToggle = () => {
    console.log(this.customStyle);
    this.bgToggle = !this.bgToggle;
  }
}
