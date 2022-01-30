import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTitle = '';
  movieApiUrl = '';
  movieData = {
    titre: '',
    description: '',
    imageUrl: '',
    Duree: ''
  };

  constructor(private http: HttpClient) {
  }

  readApi(url: string) {
    return this.http.get(url);
  }

  searchFilm() {
    const search = encodeURIComponent(this.searchTitle).trim();
    this.movieApiUrl = `http://www.omdbapi.com/?t=${search}&apikey=fbe63a31`;
    this.readApi(this.movieApiUrl)
      .subscribe(data => {
        console.log(data);
        this.movieData.titre = data['Title'];
        this.movieData.description = data['Plot'];
        this.movieData.imageUrl = data['Poster'];
        this.movieData.Duree = data['Runtime'];
      });
  }

}
