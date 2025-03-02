import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [RouterLink, RouterOutlet],

})

export class Navbar{};