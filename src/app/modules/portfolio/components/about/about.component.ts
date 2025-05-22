import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  async ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const ScrollReveal = (await import('scrollreveal')).default;
      ScrollReveal().reveal('.animation', {
        distance: '50px',
        duration: 1000,
        origin: 'bottom',
        reset: true,
        viewFactor: 0.4,
        mobile: true,
        cleanup: true,
      });
    }

  }
}
