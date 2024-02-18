import { Injectable, numberAttribute } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  GetAdd()
  {
    return 3 + 15;
  }

  GetSub()
  {
    return 40 - 20 ;
  }
}
