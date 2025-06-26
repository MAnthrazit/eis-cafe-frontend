import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToppingService } from "./app.ToppingService";
import { Topping } from "./app.ToppingInterface"

@Component({
  selector: 'topping-component',
  imports: [FormsModule],
  templateUrl: './app.ToppingComponent.html',
  styleUrls: ['./app.ToppingComponent.css']
})

export class ToppingComponent implements OnInit {
  fruit : Topping[] = [];
  sauce : Topping[] = [];
  candy : Topping[] = [];

  name : string = '';
  isVegan : boolean = false;
  description : string = '';
  file : File | null = null;

  constructor(private toppingService: ToppingService) {}

  addToppings (event : Event) : void {
    event.preventDefault();


    const form : FormData = new FormData();
    form.append('name', this.name);
    form.append('description', this.description);
    form.append('isVegan', this.isVegan.toString());

    if (this.file){
      form.append('image', this.file);
    } else{
      console.log("no image");
      return;
    }

    this.toppingService.addTopping(form).subscribe((data) => {
      console.log(data);
    });

    this.toppingService.addTopping(form)
  }

  deleteTopping(id : number) {
    this.toppingService.deleteTopping(id).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.toppingService.getToppings('fruits').subscribe((data) => {
      this.fruit = data;
    });

    this.toppingService.getToppings('candy').subscribe((data) => {
      this.candy = data;
    });

    this.toppingService.getToppings('sauce').subscribe((data) => {
      this.sauce = data;
    });
  }
}
