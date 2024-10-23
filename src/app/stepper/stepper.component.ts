import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class stepper {
  currentStep = 0; // Tracks current step
  steps = [
    { title: 'Transport Order Created', date: 'Thursday 23-03-24 09:32:43' },
    { title: 'Order Picked Up', date: 'Sunday 23-03-24 09:32:43' },
    { title: 'Order In Transit', date: 'Monday 23-03-24 09:32:43' },
    { title: 'Order Delivered Successfully', date: 'Monday 23-03-24 09:32:43' }
  ];

  onStepClick(index: number) {
    if (index <= this.currentStep + 1) {
      this.currentStep = index;
    }
  }
}
