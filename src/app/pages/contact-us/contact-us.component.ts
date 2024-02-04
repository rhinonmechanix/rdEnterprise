import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "../../navigation/header/header.component";
import { FooterComponent } from "../../navigation/footer/footer.component";

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule, HeaderComponent, FooterComponent]
})
export class ContactUsComponent {

  email:any = "Info@therdenterprises.com"

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      phone: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  onSubmit() {
    console.log("hey");
    if (this.form.valid) {
      console.log(this.form.value); // Log form values to console
      this.http.post<any>('http://localhost:3000/leads', this.form.value)
        .subscribe(
          response => {
            console.log('Success:', response);
            // Optionally, you can reset the form after successful submission
            // this.form.reset();
          },
          error => {
            console.error('Error:', error);
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }
}
