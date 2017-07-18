import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
	@Input() fiboSeries: any[];
  constructor() { }

  ngOnInit() {
  }

}
