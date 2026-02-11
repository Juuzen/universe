import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { Button } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ThemeService } from './core/services/theme.service';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Button, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly themeService = inject(ThemeService);

  protected readonly title = signal('Universe');
  protected readonly version = signal('0.0.0');

  profileMenuItems: MenuItem[] = [
    {
      label: 'Account',
      icon: 'pi pi-user',
      command: () => {
        console.log('Navigate to Account');
      },
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        this.authService.logout();
        this.router.navigate(['/login']);
      },
    },
  ];

  languageMenuItems: MenuItem[] = [
    {
      label: 'Italiano',
      icon: 'pi pi-language',
      command: () => {
        console.log('Switch to Italian');
      },
    },
    {
      label: 'English',
      icon: 'pi pi-language',
      command: () => {
        console.log('Switch to English');
      },
    },
  ];
}
