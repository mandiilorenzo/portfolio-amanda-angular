import { Component } from '@angular/core';
import Player from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  options: AnimationOptions = {
    path: 'assets/animations/dev-email.json', 
    loop: true,
    autoplay: true,
  };
}
