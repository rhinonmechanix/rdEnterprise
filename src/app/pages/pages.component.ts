import { Component } from '@angular/core';
import { FooterComponent } from "../navigation/footer/footer.component";
import { HeaderComponent } from "../navigation/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-pages',
    standalone: true,
    templateUrl: './pages.component.html',
    styleUrl: './pages.component.scss',
    imports: [FooterComponent, HeaderComponent, RouterOutlet]
})
export class PagesComponent {

}
