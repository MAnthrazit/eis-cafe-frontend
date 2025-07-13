import { Component, OnInit, NgZone } from "@angular/core";
import { FlavourService } from "./app.FlavourService";
import { Flavour } from "./app.FlavourInterface";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ice-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.IceComponent.html',
  styleUrl: './app.IceComponent.css'
})

export class IceComponent implements OnInit{
  flavours : Flavour[] = [
    {id: 0, name:'Vanilla', description:'1', isVegan:false},
    {id: 1, name:'Chocolate', description:'2', isVegan:false},
    {id: 2, name:'Cafe', description:'3', isVegan:false},
    {id: 3, name:'Lime', description:'4', isVegan:true}
  ];

  name : string = '';
  description : string = '';
  isVegan : boolean = false;
  file : File | null = null;
  id : number = 0;

  previewUrl: string | ArrayBuffer | null = '';

  constructor(private flavourService: FlavourService, private ngZone: NgZone) {}

  editFlavour(event: Event, id: number): void {
    event.preventDefault();
    // TODO
  }

  deleteFlavour(event: Event, id: number): void {
    event.preventDefault();

    this.flavourService.deleteFlavour(id).subscribe(
      () => {
        this.flavours = this.flavours.filter(f => f.id !== id);
      },
      (error) => {
        console.error(error.message);
      }
    );
  }

  addFlavours(event: Event) : void {
    event.preventDefault();

    const form : FormData = new FormData();
    form.append('id', this.id.toString());
    form.append('name', this.name);
    form.append('description', this.description);
    form.append('isVegan', this.isVegan.toString());

    if (this.file){
      form.append('image', this.file);
    } else{
      console.log("no image");
      return;
    }

    this.flavourService.addFlavours(form).subscribe(
      (data: Flavour) => {
        this.flavours.push(data);
      },
      (error: any) => {
        console.error(error.message);
      }
    );
  }

  handleFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const selectedFile = input.files[0];
      this.file = selectedFile;

      const reader = new FileReader();
      reader.onload = () => {

        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  ngOnInit(): void {
    this.flavourService.getFlavours().subscribe(
      (data: Flavour[]) => {
        this.flavours = data;
      },
      (error: any) => {
        console.error(error.message);
      }
    );
  }
}
