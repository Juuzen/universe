import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  template: `
    <div class="p-6">
      <h1>Benvenuto Utente</h1>
      <p>Questa è la tua landing page.</p>
    </div>
  `,
  styles: [
    `
      h1 {
        color: var(--p-primary-color);
      }
    `,
  ],
})
export class UserComponent {}
