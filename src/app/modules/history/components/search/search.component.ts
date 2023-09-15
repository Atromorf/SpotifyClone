import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Output() callbackData: EventEmitter<string> = new EventEmitter<string>()

  src: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term:string): void{
    if(term.length >= 4){
      this.callbackData.emit(term)
      console.log('Llamamos a nuestra appi', term)
    }

  }

}
