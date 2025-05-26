import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  options: AnimationOptions = {
    path: 'assets/animations/manifest.json', 
    loop: true,
    autoplay: true,
  };
}
