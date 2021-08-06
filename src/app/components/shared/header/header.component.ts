import { Component } from '@angular/core';
@Component({
  selector: 'app-shared-header',
  templateUrl: './header.component.html'
})
export class SharedHeaderComponent {
  getClass(): string {
    return location.pathname.replace('/', '') == '' ? 'home' : 'sub';
  }
}