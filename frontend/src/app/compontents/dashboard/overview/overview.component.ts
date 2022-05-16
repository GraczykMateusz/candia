import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  imageObject: Array<object> = [{
    image: 'assets/tree.png',
    thumbImage: 'assets/tree.png',
    alt: 'alt of image',
  }, {
    image: 'assets/melons.png',
    thumbImage: 'assets/melons.png',
    alt: 'alt of image',
  }];
}
