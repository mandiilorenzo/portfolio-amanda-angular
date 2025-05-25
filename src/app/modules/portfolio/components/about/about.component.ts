import { AfterViewInit, Component } from '@angular/core';
import { ScrollRevealService } from '../../../../services/scroll-reveal.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  constructor(private scrollRevealService: ScrollRevealService) { }

  async ngAfterViewInit() {
    await this.scrollRevealService.reveal('.animation');
  }

}

