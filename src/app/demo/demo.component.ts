import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent 
{
     public add : number ;
     public sub : number ;
     value: any;
     constructor(private obj : ArithmeticService) 
     {
      this.add = this.obj.GetAdd()

      this.sub = this.obj.GetSub()
     }


}
