import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  // liksMenu: Array<any> = [
  //   {
  //     name: 'Home',
  //     icon: 'uil-home'
  //   },
  //   {
  //     name: 'Buscar',
  //     icon: 'uil-search'
  //   }
  // ]

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  }= {defaultOptions: [], accessLink: []}
  
  customOptions: Array<any> = []
  userOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-home',
        router: ['/', 'home']
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        router: ['/','history']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil-book-open',
        router: ['/','favorites']
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear Playlist',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      }
    ]
    this.customOptions = [
      {
        name: 'Playlist 1',
        icon: 'uil-play',
        router: ['/','favorites']
      },
      {
        name: 'Playlist 2',
        icon: 'uil-play',
        router: ['/','favorites']
      },
      {
        name: 'Playlist 3',
        icon: 'uil-play',
        router: ['/','favorites']
      }
    ]
    this.userOptions = [
      {
        name: 'Logout',
        icon: 'uil-sign-out-alt',
        router: ['/','auth']
      },
    ]
  }

  goTo($event: any): void{
    this.router.navigate(['/','favorites'], {
    queryParams: {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    }
  })
    console.log($event)
  }

}
