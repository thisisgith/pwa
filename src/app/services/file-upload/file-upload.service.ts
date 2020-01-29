import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private url = 'http://localhost:3000/api/squfileupload/';
  constructor(private http: HttpClient) {
  }

  public postForm(formData) {
    return this.http.post(this.url, formData);
  }
}
