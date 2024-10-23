import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { stepper } from './stepper/stepper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, stepper],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'subhajit';
}
