import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss']
})
export class HotDealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
  }, {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
  } , {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
  }, {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
  }
  ];

}
