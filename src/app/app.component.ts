import { Component } from '@angular/core';

import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    message = '';
    selectedFile: File | null = null;

    constructor(private uploadService: UploadService) {}

    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
      }
    }

    uploadFile(): void {
      if (!this.selectedFile) {
          this.message = "A file must be selected!!!";
          return;
      } else {
        let observableUpload = this.uploadService.uploadClientsFile(this.selectedFile);
        observableUpload.subscribe (
            (response) => {
              console.log("Response: " , response);
              this.message = "File uploaded successfully!!!";
            },
            (error) => {
              console.log("Error: " , error.message);
              this.message = "A file must be selected!!!";
            }
        );
      }
    
      
    }     

}


