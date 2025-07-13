import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToppingService } from "./app.ToppingService";
import { Topping } from "./app.ToppingInterface"
import { CommonModule } from "@angular/common";

@Component({
  selector: 'topping-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.ToppingComponent.html',
  styleUrls: ['./app.ToppingComponent.css']
})

export class ToppingComponent implements OnInit {
  fruits : Topping[] = [
    {id: 1, name: 'Mango', description: 'Sweet', isVegan: true},
    {id: 2, name: 'Apple', description: 'also Sweet', isVegan: true},
    {id: 3, name: 'Kiwi', description: 'also Sweet', isVegan: true},
  ];
  sauces : Topping[] = [
    {id: 4, name: 'Chocolate', description: 'Sweet', isVegan: false},
    {id: 5, name: 'Kiwi', description: 'Sweet', isVegan: true},
    {id: 6, name: 'strawberry', description: 'Sweet', isVegan: true},
  ];
  candies : Topping[] = [
    {id: 7, name: 'Oreo', description: 'Sweet', isVegan: true},
    {id: 8, name: 'Kinder', description: 'Sweet', isVegan: false},
    {id: 9, name: 'After8', description: 'Sweet', isVegan: false},
  ];

  name : string = '';
  type : string = 'fruits';
  isVegan : boolean = false;
  description : string = '';
  file : File | null = null;
  previewUrl : string = '#';

  constructor(private toppingService: ToppingService) {}

  handleFileChange(event : Event){
    event.preventDefault();
  }

  addToppings (event : Event) : void {
    event.preventDefault();


    const form : FormData = new FormData();
    form.append('name', this.name);
    form.append('description', this.description);
    form.append('isVegan', this.isVegan.toString());

    if (this.file){
      form.append('image', this.file);
    } else{
      console.error("No image");
      return;
    }

    this.toppingService.addTopping(this.type, form).subscribe(
      (data: Topping) => {
        switch (this.type) {
          case 'fruits':
            this.fruits.push(data);
            break;
          case 'sauces':
            this.sauces.push(data);
            break;
          case 'candies':
            this.sauces.push(data);
            break;
          default:
            console.error("Type error");
        }
      },
      (error: any) => {
        console.error(error.message);
      }
    );
  }

  deleteTopping(id : number) {
    this.toppingService.deleteTopping(id).subscribe(
      () => {
        this.sauces = this.sauces.filter(t => t.id !== id);
        this.fruits = this.fruits.filter(t => t.id !== id);
        this.candies = this.candies.filter(t => t.id !== id);
      },
      (error) => {
        console.error(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.toppingService.getToppings('fruits').subscribe(
      (data: Topping[]) => {
        this.fruits = data;
      },
      (error : any) => {
        console.error(error.message);
      }
    );

    this.toppingService.getToppings('candies').subscribe(
      (data: Topping[]) => {
        this.candies = data;
      },
      (error : any) => {
        console.error(error.message);
      }
    );

    this.toppingService.getToppings('sauces').subscribe(
      (data: Topping[]) => {
        this.sauces = data;
      },
      (error : any) => {
        console.error(error.message);
      }
    );
  }
}
