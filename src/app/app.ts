import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar} from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <main>
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </main>
    `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'test';
}
