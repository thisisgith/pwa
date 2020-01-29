import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FileUploadService } from '../services';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  public fg: FormGroup;
  private file;
  constructor(public fus: FileUploadService) {
    this.fg = new FormGroup({
      name: new FormControl(''),
      fileUpload: new FormControl(''),
    });
  }

  selectFile(event) {
    const f = event.target.files[0];
    this.file = f;
  }

  /**
   * upload the form to server
   */
  public submit() {
    const formData = new FormData();
    formData.append('name', this.fg.value.name);
    formData.append('fileUpload', this.file);
    this.fus.postForm(formData).subscribe(res => console.log(res),
      err => console.log(err));
  }
}
