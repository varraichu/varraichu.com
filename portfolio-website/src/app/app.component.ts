import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing.component';
import { Navbar } from '../components/navbar/navbar.component';
import { AboutMe } from '../pages/about-me/about.component';
import { Education } from '../pages/education/education.component';
import { Skills } from '../pages/skills/skills.component';
import { ConnectWithMe } from '../pages/connect/connect.component';
import { Experience } from '../pages/experience/experience.component';
import { Projects } from '../pages/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, LandingPage, AboutMe, Education, Skills, ConnectWithMe, Experience, Projects],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
}
