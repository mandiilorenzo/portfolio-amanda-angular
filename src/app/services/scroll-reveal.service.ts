import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollRevealService {

  async reveal(target: string) {
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
