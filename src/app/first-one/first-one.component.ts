import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-one',
  templateUrl: './first-one.component.html',
  styleUrls: ['./first-one.component.scss']
})
export class FirstOneComponent implements OnInit {

  isAuth = false;
  lastUpdate: any;
  appareils: any[] = [];

  constructor() {

    this.lastUpdate =  new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });

    this.appareils.push({name : 'Machine à laver', status : true});
    this.appareils.push({name : 'Ordinateur', status : false});
    this.appareils.push({name : 'Lave vaisselle', status : false});
    this.appareils.push({name : 'Télévision', status : true});

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
