import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsidebarComponent } from "../Components/asidebar/asidebar.component";
import { FooterComponent } from "../Components/footer/footer.component";
import { HomeComponent } from "../Components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [AsidebarComponent, FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mealApp';
}
