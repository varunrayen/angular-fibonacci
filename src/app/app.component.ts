import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value: number;
  fiboSeries: any[];
  calculated = false;

  fibonacci(){
  		this.calculated = true;
		  var f = [];
		  for (var c = 0; c < this.value; ++c) {
		    f.push((c < 2) ? c : f[c-1] + f[c-2]);
		  }
		  this.fiboSeries = f;
		  console.log(f);
  }
}
