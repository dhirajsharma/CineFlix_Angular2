import { Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {IMovie} from './movie';
import {MovieFilterPipe} from './movie-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {MovieService} from './movie.service';

@Component({
    templateUrl : 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css'],
    pipes: [MovieFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES] 
})

export class MovieListComponent implements OnInit {
    pageTitle: string = "Movie List";
    imageWidth: number = 100;
    imageNumber: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    movies: IMovie[];
    
    constructor(private _movieService: MovieService){}
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this._movieService.getMovies()
            .subscribe(
                movies => this.movies = movies,
                error => this.errorMessage = <any>error);
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle='Movie List: '+ message;
    }
}