import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = window.location.origin + '/api';
  candidatePost;

  constructor(private http: HttpClient) { }
  getPosts() {
   return this.http.get(this.url + '/post')
  }
  postPost(post) {
    return this.http.post(this.url + '/post', post)
  };
  putPosts(id, post) {
    return this.http.put(this.url + `/post?id=` + id, post);
  };
  deletePosts(post) {
    return this.http.delete(this.url + `/post?id=${post._id}`);
  }
}
