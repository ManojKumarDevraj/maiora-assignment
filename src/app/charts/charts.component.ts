import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'] 
})
export class ChartsComponent {

  lineChartData = [
    {
      name: "Series A",
      series: [
        { name: "January", value: 65 },
        { name: "February", value: 59 },
        { name: "March", value: 80 },
        { name: "April", value: 81 },
        { name: "May", value: 56 },
        { name: "June", value: 55 },
        { name: "July", value: 40 }
      ]
    }
  ];


  barChartData = [
    {
      name: "Series A",
      value: 65
    },
    {
      name: "Series B",
      value: 28
    },
    {
      name: "Series C",
      value: 40
    },
    {
      name: "Series D",
      value: 19
    },
    {
      name: "Series E",
      value: 86
    },
    {
      name: "Series F",
      value: 27
    },
    {
      name: "Series G",
      value: 90
    }
  ];

  view: [number, number] = [700, 400]; 
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Months';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme: { domain: string [] } = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] 
  };

  constructor() { }
}
