import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FotterComponent } from "./fotter/fotter.component";
import { EndbarComponent } from "./endbar/endbar.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FotterComponent, EndbarComponent, ContactComponent, AboutComponent, PortfolioComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangassi';
}
