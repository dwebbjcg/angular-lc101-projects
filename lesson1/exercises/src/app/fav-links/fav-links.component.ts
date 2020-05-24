import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://www.youtube.com/", "https://dwebbjcg.github.io/html_me_something/"];

  constructor() { }

  ngOnInit() {
  }

}
