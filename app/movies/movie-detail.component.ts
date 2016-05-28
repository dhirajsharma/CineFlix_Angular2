import {Component} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl : `app/movies/movie-detail.component.html`,
    styleUrls: ['app/movies/movie-detail.component.css'],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class MovieDetailComponent {
    pageTitle: string= 'Movie Details';
    movie: IMovie;
    id: string;
    errorMessage: string;
    
    constructor(private _movieService: MovieService,
        private _router: Router,
        private _routeParams: RouteParams) {
            this.id = _routeParams.get('id');
    }

    ngOnInit() {
        if (!this.movie) {
            this.getMovie(this.id);
        }
    }
    
    getMovie(id: string) {
        this._movieService.getMovie(id)
        .subscribe(
            movie => this.movie=movie,
            error => this.errorMessage=<any>error);
    }
    
    onBack(): void {
        this._router.navigate(['Movies']);
    }
}