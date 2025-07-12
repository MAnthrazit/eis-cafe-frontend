import { Component } from "@angular/core";
import { IceComponent } from "./app.IceComponent";
import { ToppingComponent } from "./app.ToppingComponent";
import { CupComponent } from "./app.CupComponent";

@Component({
  selector: 'app-menu-component',
  imports: [IceComponent, ToppingComponent, CupComponent],
  templateUrl: 'app.MenuComponent.html',
  styleUrl: 'app.MenuComponent.css'
})

export class MenuComponent {
}
