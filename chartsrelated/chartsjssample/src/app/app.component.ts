import { Component } from '@angular/core';
import { ChartdataService } from './chartdata.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  chart = [];

  constructor(private _chartdata:ChartdataService){};

  ngOnInit(){
      this._chartdata.getChartData().subscribe(res => {
       
      });
    };
  };

