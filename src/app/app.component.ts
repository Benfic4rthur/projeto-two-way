import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected name: string = '';

  protected handleInput(event: string) {
    if (event) {
      this.name = event;
    }
  }
}
