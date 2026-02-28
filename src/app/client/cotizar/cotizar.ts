import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cotizar',
  imports: [ReactiveFormsModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cotizar.html',
  styleUrl: './cotizar.css',
})
export class Cotizar {
  private fb = inject(FormBuilder);
  quoteForm;
  calculatedResult = signal(false);

  constructor() {
    this.quoteForm = this.fb.group({
      type: ["aereo", Validators.required],
      weight: ["", [Validators.required, Validators.min(0.1)]],
      value: ["", [Validators.required, Validators.min(1)]],
      length: [""],
      width: [""],
      height: [""],
    });
  }

  calculate() {
    if (this.quoteForm.valid) {
      // Simulate calculation
      this.calculatedResult.set(true);
    }
  }
}
