import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  test() {

  }
}
