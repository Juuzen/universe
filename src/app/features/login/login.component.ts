import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, CardModule],
  template: `
    <div class="flex justify-center items-center h-full min-h-[60vh]">
      <p-card title="Login Seleziona Ruolo" subheader="Mock Login">
        <div class="flex flex-col gap-4">
          <p-button label="Logga come Utente" (click)="login('user')" severity="primary" />
          <p-button label="Logga come Admin" (click)="login('admin')" severity="danger" />
        </div>
      </p-card>
    </div>
  `,
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  login(role: 'user' | 'admin') {
    this.authService.login(role);
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
