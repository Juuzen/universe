import { computed, inject, Injectable, signal } from '@angular/core';
import { UserProfile, UserRole } from './user.model';
import { ThemeService } from '../services/theme.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly themeService = inject(ThemeService);
  private readonly _currentUser = signal<UserProfile | null>(null);

  readonly currentUser = computed(() => this._currentUser());
  readonly isAuthenticated = computed(() => !!this._currentUser());
  readonly userRole = computed(() => this._currentUser()?.role ?? null);

  login(role: UserRole) {
    this._currentUser.set({
      name: `Mock ${role}`,
      role: role,
    });
    this.themeService.setRoleTheme(role);
  }

  logout() {
    this._currentUser.set(null);
    this.themeService.setRoleTheme('user'); // Reset to default user theme or keep last
  }
}
