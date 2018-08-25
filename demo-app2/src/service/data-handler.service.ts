import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Post} from '../model/post';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';
import {Comment} from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private http: HttpClient) {
  }

  // retrieve whole list of posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiEndpoint + '/posts')
      .pipe(map((posts: Post[]) => posts));
  }

  // retrieve whole list of comments
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.apiEndpoint + '/comments')
      .pipe(map((comments: Comment[]) => comments));
  }
}
