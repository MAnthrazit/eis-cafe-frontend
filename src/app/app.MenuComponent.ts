import { Component } from "@angular/core";
import { IceComponent } from "./app.IceComponent";
import { ToppingComponent } from "./app.ToppingComponent";



@Component({
  selector: 'app-menu-component',
  imports: [IceComponent, ToppingComponent],
  template: 'app.MenuComponent.html',
  styles: ['h1 { font-weight: normal; }']
})

export class MenuComponent {

}
