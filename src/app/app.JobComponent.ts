import { Component, OnInit } from "@angular/core";
import { JobService } from "./app.JobService";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-job-component',
  imports: [FormsModule],
  templateUrl: 'app.JobComponent.html',
  styleUrl: 'app.JobComponent.css'
})

export class JobComponent implements OnInit {
  name : string = '';
  surname : string = '';
  comment : string = '';
  eMail : string = '';
  type : string = '';
  file : File | null = null;

  constructor(private jobService: JobService){}

  addJobRequest(event: Event) : void {
    event.preventDefault();

    const form = new FormData();
    form.append('name', this.name);
    form.append('surname', this.surname);
    form.append('comment', this.comment);
    form.append('eMail', this.eMail);
    form.append('type', this.type);

    if (this.file){
      form.append('vcFile', this.file);
    } else {
      console.log("no CV");
      return;
    }

    this.jobService.addJobRequest(form).subscribe((data) => {
      console.log(data);
    });
  }

  decideJobRequest(event: Event, id: number, selector: string) : void {
    event.preventDefault();

    this.jobService.decideJobRequest(id, selector).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {

  }



}
