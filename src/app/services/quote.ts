import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quotes = [
    {
      id: 1001,
      type:'BOP',
      customer:'John',
      status:'Draft'
    },
    {
      id:1002,
      type:'CP',
      customer:'David',
      status:'Submitted'
    }
  ];

  getQuotes(){
    return this.quotes;
  }
}