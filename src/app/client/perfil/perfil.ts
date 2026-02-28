import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-perfil',
  imports: [ReactiveFormsModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  profileForm;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['Juan', Validators.required],
      lastName: ['Doe', Validators.required],
      email: ['juan.doe@example.com', [Validators.required, Validators.email]],
      phone: ['+503 7777-8888', Validators.required],
      document: ['01234567-8', Validators.required],
    });
  }
}
