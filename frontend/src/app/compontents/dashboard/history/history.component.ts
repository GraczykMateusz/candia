import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
    title: 'hot deal product'
  }, {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
    title: 'hot deal product'
  } , {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
    title: 'hot deal product'
  }, {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
    title: 'hot deal product'
  }, {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
    title: 'hot deal product'
  }, {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
    title: 'hot deal product'
  } , {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
    title: 'hot deal product'
  }, {
    image: 'assets/product.jpg',
    thumbImage: 'assets/product.jpg',
    alt: 'alt of image',
    title: 'hot deal product'
  }
  ];

}
