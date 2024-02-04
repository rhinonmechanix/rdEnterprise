import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../navigation/header/header.component";
import { FooterComponent } from "../../navigation/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class HomeComponent {
  @ViewChild('scrollTargetProject', { static: false }) scrollTargetProject: ElementRef | undefined;

  constructor(private route: Router) {}

  navigate(page: string) {
    if(page == "contact-us"){
      this.route.navigate(['/futureInterio/contact-us']);
    }
  }
  
  scrollToProject(){
    console.log('scrollToFeedback called');
    if (this.scrollTargetProject && this.scrollTargetProject.nativeElement) {
      console.log('scrollIntoView called');
      this.scrollTargetProject.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
