import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    image: 'assets/1.png',
    thumbImage: 'assets/1.png',
    alt: 'alt of image',
  }, {
    image: 'assets/melons.png',
    thumbImage: 'assets/melons.png',
    alt: 'alt of image',
  } , {
    image: 'assets/3.png',
    thumbImage: 'assets/3.png',
    alt: 'alt of image',
  }, {
    image: 'assets/4.jpg',
    thumbImage: 'assets/4.jpg',
    alt: 'alt of image',
  }
  ];

}
