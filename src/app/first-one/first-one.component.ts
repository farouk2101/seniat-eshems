import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-one',
  templateUrl: './first-one.component.html',
  styleUrls: ['./first-one.component.scss']
})
export class FirstOneComponent implements OnInit {

  isAuth = false;

  appareils: any[] = [];

  constructor() {
    this.appareils[0] = ['Machine à laver', true];
    this.appareils[1] = ['Ordinateur', false];
    this.appareils[2] = ['Lave vaisselle', false];
    this.appareils[3] = ['Télévision', true];

    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
  }

  onAllumer(){
    console.log('Tout allumer !');
  }

  ngOnInit(): void {
  }

}
