
import {Injectable} from 'angular2/core';
import {IMovie} from './movie';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable() 
export class MovieService {
    private _movieUrl = 'api/movies/movielist.json';
    
    constructor(private _http: Http) {}
    getMovies(): Observable<IMovie[]> {
       return this._http.get(this._movieUrl)
                        .map((response: Response) => <IMovie[]>response.json())
                        //.do(data => console.log("All: "+JSON.stringify(data)))
                        .catch(this.handleError);
    }
    
    getMovie(id: string): Observable<IMovie> {
        return this.getMovies()
            .map((movies: IMovie[]) => movies.find(m => m.imdbID === id));
    }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}