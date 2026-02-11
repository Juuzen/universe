import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  template: `
    <div class="p-6">
      <h1 class="text-red-500">Dashboard Amministratore</h1>
      <p>Gestione globale del sistema.</p>
    </div>
  `,
  styles: [
    `
      h1 {
        color: #d32f2f;
      }
    `,
  ],
})
export class AdminComponent {}
