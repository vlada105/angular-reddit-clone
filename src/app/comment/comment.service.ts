import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentPayload } from './comment.payload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private httpClient: HttpClient ) { }


  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/comments/', commentPayload);
  }

  getAllCommentsForPost(postId: number): Observable<Array<CommentPayload>> {
    return this.httpClient.get<Array<CommentPayload>>('http://localhost:8080/api/comments/by-post/' + postId);
  }


  getAllCommentsByUser(name: string) {
    return this.httpClient.get<Array<CommentPayload>>('http://localhost:8080/api/comments/by-user/' + name);
  }


}
