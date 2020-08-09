import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldService(name: string) {
    return this.httpClient.get<HelloWorldBean>(`http://127.0.0.1:5555/hello-world/${name}`);
  }
}
