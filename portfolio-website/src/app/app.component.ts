import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing.component';
import { Navbar } from '../components/navbar/navbar.component';
import { AboutMe } from '../pages/about-me/about.component';
import { Education } from '../pages/education/education.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, AboutMe, Education],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
}
