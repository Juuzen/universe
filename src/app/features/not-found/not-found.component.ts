import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  imports: [ButtonModule],
  template: `
    <div class="flex flex-col items-center justify-center h-full min-h-[60vh] gap-4">
      <h1 class="text-4xl font-bold">404</h1>
      <p>Pagina non trovata.</p>
      <p-button label="Torna alla Home" (click)="goHome()" />
    </div>
  `,
})
export class NotFoundComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  goHome() {
    if (this.authService.userRole() === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
