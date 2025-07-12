import { Component } from "@angular/core";
import { JobService } from "./app.JobService";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-job-component',
  imports: [FormsModule],
  templateUrl: 'app.JobComponent.html',
  styleUrl: 'app.JobComponent.css'
})

export class JobComponent {
  name : string = '';
  surname : string = '';
  comment : string = '';
  eMail : string = '';
  type : string = 'Praktikum';
  cv_file : File | null = null;
  cl_file : File | null = null;

  constructor(private jobService: JobService){}

  onFileSelected(event: Event, type: 'cv' | 'cl') {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      if (type === 'cv') {
        this.cv_file = file;
      } else {
        this.cl_file = file;
      }
    }
  }

  addJobRequest(event: Event) : void {
    event.preventDefault();

    const form = new FormData();
    form.append('name', this.name);
    form.append('surname', this.surname);
    form.append('comment', this.comment);
    form.append('eMail', this.eMail);
    form.append('type', this.type);

    if (this.cv_file){
      form.append('cv_file', this.cv_file);
    } else {
      console.error("Missing CV");
      return;
    }

    if (this.cl_file){
      form.append('cl_file', this.cl_file);
    }

    this.jobService.addJobRequest(form).subscribe(
      (data: any) => {
        console.log(data.message);
      },
      (error: any) => {
        console.error(error.message);
      }
    );
  }

  decideJobRequest(event: Event, id: number, selector: string) : void {
    event.preventDefault();

    this.jobService.decideJobRequest(id, selector).subscribe(
      (data : any) => {
        console.log(data.message);
      },
      (error : any) => {
        console.error(error.message);
      }
    );
  }
}
