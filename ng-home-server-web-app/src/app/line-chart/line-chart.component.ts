import {Component, Input } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent {
  @Input() lineChartData: ChartDataSets[] = [];
  @Input() lineChartLabels: Label[];

  @Input() lineChartType: ChartType = 'line';
  @Input() lineChartLegend = true;
  @Input() lineChartColors: Color[] = [];
  @Input() lineChartOptions: ChartOptions = {
    responsive: true,
    animation: {
      duration: 0
    },
  };

  @Input('lineChartOptions', )
  set(options: ChartOptions) {
    this.lineChartOptions = {
      ...this.lineChartOptions,
      ...options,
    };
  }
}
