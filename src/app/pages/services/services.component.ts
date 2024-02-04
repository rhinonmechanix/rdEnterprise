import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../navigation/header/header.component";
import { FooterComponent } from "../../navigation/footer/footer.component";

@Component({
    selector: 'app-services',
    standalone: true,
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class ServicesComponent {

  
  ngOnInit(): void {
    // Initialization logic if needed
  }
  constructor(private route: Router) {}

  navigate(page: string) {
    if(page == "contact-us"){
      this.route.navigate(['/futureInterio/contact-us']);
    }
  }
  services: any = [
    {
      title: 'Space Planning',
      details: [
        'Crafting furniture layouts and designs',
        'Conceptualizing innovative lighting solutions',
        'Recommending flooring and wall covering options',
        'Implementing creative decoration strategies'
      ]
    },
    {
      title: 'Modular Interiors',
      details: [
        'Designing and installing bespoke furniture',
        'Creating modern and functional modular kitchens',
        'Crafting stylish and space-efficient wardrobes'
      ]
    },
    {
      title: 'Renovation and Remodeling',
      details: [
        'Implementing structural changes to optimize interior space',
        'Undertaking remodeling projects for kitchens and bathrooms',
        'Executing civil work for comprehensive transformations'
      ]
    },
    {
      title: 'Smart Home Integration',
      details: [
        'Installing smart home devices for automation and enhanced convenience'
      ]
    },
    {
      title: 'Miscellaneous',
      details: [
        'Providing window treatments for enhanced aesthetics',
        'Executing electrical and plumbing work with precision'
      ]
    },
    {
      title: 'Consultation Services',
      details: [
        'Offering professional advice on interior design and decoration'
      ]
    }
  ];

}
