import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string) {
      if (newTitle === '') {
         alert("Please enter a valid title.")
      }
      else if (this.movies.includes(newTitle)) {
         alert("This title already exists on the list!")
      }
      else {
         this.movies.push(newTitle)
      }
   }
}
