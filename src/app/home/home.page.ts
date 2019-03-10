import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchParams = {
    artist: '',
    title:''
  }

  constructor() {

  }

  search() {
    console.log(this.searchParams.artist)
    console.log(this.searchParams.title)
  }
}
