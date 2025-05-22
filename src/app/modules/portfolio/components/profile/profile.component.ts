import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements AfterViewInit {
  typed: Typed | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const options = {
          strings: ['Desenvolvedora Full Stack'],
          typeSpeed: 70,
          startDelay: 300,
          showCursor: true,
          loop: false,
          cursorChar: '|',
        };

        this.typed = new Typed('.typed-text', options);
      }, 100);
    }
  }

  toggleTheme() {
    document.body.classList.toggle('light-theme');
  }
}
