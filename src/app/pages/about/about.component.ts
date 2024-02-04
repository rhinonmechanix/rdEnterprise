import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from "../../navigation/header/header.component";
import { FooterComponent } from "../../navigation/footer/footer.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, HeaderComponent, FooterComponent]
})
export class AboutComponent {

}
