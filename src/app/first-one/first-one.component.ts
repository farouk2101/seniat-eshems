import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-one',
  templateUrl: './first-one.component.html',
  styleUrls: ['./first-one.component.scss']
})
export class FirstOneComponent implements OnInit {

  isAuth = false;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
  }

  onAllumer(){
    console.log('Tout allumer !')
  }

  ngOnInit(): void {
  }

}
