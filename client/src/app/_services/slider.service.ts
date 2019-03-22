import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  options: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };
  images = [
    {url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    {url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 2', description: 'Lorem ipsum dolor sit amet, consectetur '},
    {url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.Csit amet, consectetur adipisicing.'},
    {url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 4', description: 'Lorem ipsum dolor sit amet, consectetur adipis icingc onsectetur adipisicing.Csit amet, consectetur adipisicing.'},
    {url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 5', description: 'Lorem ipsum dolor sit amet.'},
    {url: '../../../../assets/images/banner.PNG', title: 'Electriclmp 6', description: 'Ipsum dolor sit ametL orem ipsum dolor sit amet, consectetur adipisicing.'}
  ];
  constructor() { }

  getImages() {
    return this.images;
  }
  sliderOptions() {
    return this.options
  }
}
