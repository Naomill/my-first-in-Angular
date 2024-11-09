import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <header class="brand-name">
        <h1 class="primary-color"><i class="fas fa-home"></i> Home</h1>
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [ HomeComponent ],
})
export class AppComponent {
  title = 'Homes';
}
