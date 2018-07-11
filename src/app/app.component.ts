import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'npr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    this.api.get20Fighters().subscribe(a => console.dir(a));
  }
}
