import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const requiredRole = route.data?.['role'];
    if (requiredRole && authService.userRole() !== requiredRole) {
      // If user is logged in but role doesn't match
      if (authService.userRole() === 'admin') {
        return router.createUrlTree(['/admin']);
      }
      return router.createUrlTree(['/']);
    }
    return true;
  }

  return router.createUrlTree(['/login']);
};
