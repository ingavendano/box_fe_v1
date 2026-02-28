import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Package {
  id: string;
  tracking: string;
  description: string;
  date: string;
  status: string;
  weight: number;
  value: number;
  type: string;
  total: number;
}

@Component({
  selector: 'app-historial',
  imports: [CommonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {
  packages: Package[] = [
    {
      id: "1",
      tracking: "TBA123456789",
      description: "Laptop Dell XPS 15",
      date: "14 Oct 2023",
      status: "En Tránsito",
      weight: 4.5,
      value: 1200,
      type: "Aéreo",
      total: 196.0,
    },
    {
      id: "2",
      tracking: "1Z9999999999",
      description: "Zapatos Nike Air Max",
      date: "12 Oct 2023",
      status: "Bodega Miami",
      weight: 2.1,
      value: 120,
      type: "Aéreo",
      total: 26.8,
    },
    {
      id: "3",
      tracking: "94001112020",
      description: "Libros Amazon",
      date: "10 Oct 2023",
      status: "Entregado",
      weight: 5.0,
      value: 45,
      type: "Marítimo",
      total: 24.25,
    },
    {
      id: "4",
      tracking: "TBA987654321",
      description: "Cámara Sony A7III",
      date: "05 Oct 2023",
      status: "Entregado",
      weight: 3.2,
      value: 1800,
      type: "Aéreo",
      total: 282.1,
    },
    {
      id: "5",
      tracking: "1Z8888888888",
      description: "Ropa Shein",
      date: "01 Oct 2023",
      status: "Entregado",
      weight: 8.5,
      value: 150,
      type: "Marítimo",
      total: 50.5,
    },
  ];

  selectedPackage = signal<Package | null>(null);

  openModal(pkg: Package) {
    this.selectedPackage.set(pkg);
  }

  closeModal() {
    this.selectedPackage.set(null);
  }
}