import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessage: string;

  constructor(
      private route: ActivatedRoute,
      private helloWorldService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    this.helloWorldService.executeHelloWorldService(this.name).subscribe(
        response => this.welcomeMessage = response.message,
        error => this.welcomeMessage = error.error.message);
  }
}
