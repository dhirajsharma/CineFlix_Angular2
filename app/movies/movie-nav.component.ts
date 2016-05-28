import {Component} from 'angular2/core';

@Component({
    selector: 'mo-nav',
    templateUrl : `app/movies/movie-nav.component.html` 
})
export class MovieNavComponent {
    pageTitle: string= 'MovieFlix';
}