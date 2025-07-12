import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CupService } from "./app.CupService";


@Component({
  selector: 'cup-component',
  imports: [FormsModule],
  templateUrl: 'app.CupComponent.html',
  styleUrl: 'app.CupComponent.css'
})

export class CupComponent {

  constructor(private cupService: CupService) {}

  addCup(event: Event) {
    event.preventDefault();
  }

  deleteCup(event: Event){
    event.preventDefault();
  }

  editCup(event: Event) {
    event.preventDefault();
  }
}
