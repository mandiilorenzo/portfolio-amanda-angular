import { Component } from '@angular/core';
import { ScrollRevealService } from '../../../../services/scroll-reveal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private scrollRevealService: ScrollRevealService) { }

  async ngAfterViewInit() {
    await this.scrollRevealService.reveal('.animation');
  }
}
