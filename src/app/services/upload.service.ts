import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private apiRestEndpoint = "http://localhost:8801/upload";

  constructor(private httpClient: HttpClient) { }

  public uploadClientsFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);

    let observable = this.httpClient.post(this.apiRestEndpoint, formData);
    return observable;
  }


}
