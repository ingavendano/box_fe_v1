import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isSidebarOpen = signal(false);

  menuItems = [
    { path: '/client/resumen', icon: 'dashboard', label: 'Resumen' },
    { path: '/client/perfil', icon: 'person', label: 'Mi Perfil' },
    { path: '/client/direcciones', icon: 'location_on', label: 'Direcciones' },
    { path: '/client/cotizar', icon: 'calculate', label: 'Cotizar Envío' },
    { path: '/client/rastreo', icon: 'my_location', label: 'Rastreo' },
    { path: '/client/historico', icon: 'history', label: 'Histórico de Paquetes' },
  ];

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }
}
