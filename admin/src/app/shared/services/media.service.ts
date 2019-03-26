import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  url = window.location.origin + '/api';
  // url = 'http://localhost:3000' + '/api';
  candidateMedia;

  constructor(private http: HttpClient) { }
  getMedias() {
    return this.http.get(this.url + '/media')
  }
  postMedia(media) {
    return this.http.post(this.url + '/media', media)
  };
  putMedia(id, media) {
    return this.http.put(this.url + `/media?id=` + id, media);
  };
  deleteMedia(media) {
    return this.http.delete(this.url + `/media?id=${media._id}`);
  }
}
