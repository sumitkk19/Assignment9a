import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  
  resultAdd: any 
  resultSub: any 

  constructor(private arithmeticService: ArithmeticService) { }
  ngOnInit(): void {
    this.resultAdd = this.arithmeticService.add(20, 30);
    this.resultSub = this.arithmeticService.sub(30, 20);
  }
}

  
  
