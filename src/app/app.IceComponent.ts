import { Component, OnInit } from "@angular/core";
import { FlavourService } from "./app.FlavourService";
import { Flavour } from "./app.FlavourInterface";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'ice-component',
  imports: [FormsModule],
  template: './app.IceComponent.html',
  styleUrl: './app.IceComponent.css'
})

export class IceComponent implements OnInit{
  flavours : Flavour[] = [
    {id: 0, name:'Vanilla', description:'Sweet', isVegan:false},
    {id: 1, name:'Chocolate', description:'A', isVegan:false},
    {id: 2, name:'Cafe', description:'B', isVegan:false},
    {id: 3, name:'Lime', description:'C', isVegan:true}
  ];

  name : string = '';
  description : string = '';
  isVegan : boolean = false;
  file : File | null = null;

  constructor(private flavourService: FlavourService) {}

  addFlavours(event: Event) : void {
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

    this.flavourService.addFlavours(form).subscribe((data) => {
      console.log(data);
    });
  }

  handleFileChange(event : Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files && input.files.length > 0) {
      this.file = input.files[0];
    } else {
      this.file = null;
    }
  }

  ngOnInit(): void {
      //this.flavourService.getFlavours().subscribe((flavours) => {
      //  this.flavours = flavours;
      //});
  }

}
