import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-switch-toggle',
  standalone: true,
  imports: [],
  templateUrl: './switch-toggle.component.html',
  styleUrl: './switch-toggle.component.css',
})
export class SwitchToggleComponent {
  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (!theme) localStorage.setItem('theme', 'dark');
    this.applyTheme();
  }

  applyTheme() {
    console.log('Funcionando');
    const theme = localStorage.getItem('theme');
    console.log(theme);

    if (theme === 'dark') {
      document.querySelector('input')!.checked = false;
      document.querySelector('body')!.classList.add('dark');
      return;
    }

    if (theme === 'light') {
      document.querySelector('input')!.checked = true;
      document.querySelector('body')!.classList.remove('dark');
      return;
    }
  }

  changeTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      this.applyTheme();
      return;
    }

    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      this.applyTheme();
      return;
    }
  }
}
