import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Life';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://image.freepik.com/free-vector/music-colorful-illustration_24908-57101.jpg';
  image3 = 'https://www.mcas.k12.in.us/cms/lib/IN01001792/Centricity/Domain/1202/Coding%20GIF%206%2011-12-2019.gif';

  constructor() { }

  ngOnInit() {
  }

}
