import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-rastreo',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rastreo.html',
  styleUrl: './rastreo.css',
})
export class Rastreo {
  private fb = inject(FormBuilder);
  searchForm;
  hasSearched = signal(false);

  constructor() {
    this.searchForm = this.fb.group({
      trackingNumber: ["", Validators.required],
    });
  }

  search() {
    if (this.searchForm.valid) {
      this.hasSearched.set(true);
    }
  }
}
