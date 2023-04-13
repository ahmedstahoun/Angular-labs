import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  imageSource = [
    'assets/Images/1.jpg',
    'assets/Images/2.jpg',
    'assets/Images/3.jpg',
    'assets/Images/4.jpeg',
  ];
  current = 0;
  imageInterval: any;

  nextImg() {
    if (this.current < this.imageSource.length - 1) this.current++;
  }
  prevImg() {
    if (this.current > 0) this.current--;
  }

  startSlide() {
    this.imageInterval = setInterval(() => {
      if (this.current >= this.imageSource.length - 1) this.current = 0;
      else this.current++;
    }, 1000);
  }
  stopSlide() {
    clearInterval(this.imageInterval);
  }
}
