import { computed, inject, Injectable, signal } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { UserRole } from '../auth/user.model';
import { UserPreset } from '../theme/user.preset';
import { AdminPreset } from '../theme/admin.preset';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly primeng = inject(PrimeNG);
  private readonly _isDarkMode = signal<boolean>(false);

  readonly isDarkMode = computed(() => this._isDarkMode());

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    // Check system preference or stored preference
    const savedTheme = localStorage.getItem('isDarkMode');
    const prefersDark = globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

    if (savedTheme !== null) {
      this._isDarkMode.set(savedTheme === 'true');
    } else {
      this._isDarkMode.set(prefersDark);
    }

    this.updateThemeMode();
  }

  toggleDarkMode() {
    this._isDarkMode.update((v) => !v);
    localStorage.setItem('isDarkMode', String(this._isDarkMode()));
    this.updateThemeMode();
  }

  setRoleTheme(role: UserRole) {
    const preset = role === 'admin' ? AdminPreset : UserPreset;
    this.primeng.theme.set({
      preset: preset,
      options: {
        darkModeSelector: '.my-app-dark',
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities',
        },
      },
    });
  }

  private updateThemeMode() {
    const element = document.querySelector('html');
    if (this._isDarkMode()) {
      element?.classList.add('my-app-dark');
    } else {
      element?.classList.remove('my-app-dark');
    }
  }
}
