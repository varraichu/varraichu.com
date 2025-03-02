import { Component } from "@angular/core";
import { Navbar } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
selector:'app-landing-page',
templateUrl: './landing.component.html',
imports: [Navbar, RouterLink, RouterOutlet],
})

export class LandingPage{};