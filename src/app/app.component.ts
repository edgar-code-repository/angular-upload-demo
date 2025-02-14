import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-upload-demo';
    selectedFile: File | null = null;

    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
      }
    }

    uploadFile(): void {
      if (!this.selectedFile) {
          return;
      }
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      
    }  

}


