import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./navigation/header/header.component";
import { FooterComponent } from './navigation/footer/footer.component';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent,FooterComponent,MatInputModule],
})
export class AppComponent {
  title = 'rdEnterprise';
}
