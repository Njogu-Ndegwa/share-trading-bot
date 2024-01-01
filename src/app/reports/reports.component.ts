import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Color } from 'chart.js';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements AfterViewInit {
  @ViewChild('myCanvas') canvas!: ElementRef;
  gradient: any
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [0, 20, 40, 30, 50, 55, 70],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: '#96e14e',
        backgroundColor: 'red',
        pointRadius: 0

      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      x: {
        ticks: {
          color: 'white' // Change this to the color you want for the x axis
        }
      },
      y: {
        ticks: {
          color: 'white',

        },

        position: 'right'
      }
    },
    elements: {
      line: {
        tension: 1
      }
    },
  };
  public lineChartLegend = false;

  public doughnutChartLabels: string[] = ['33%', '55%', '12%'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [350, 450, 100],
      label: 'Series A',
      backgroundColor: ['#ff5151', '#3864ce', '#ffb026'],
      borderColor: ['#ff5151', '#3864ce', '#ffb026']
    },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: '77%',
  };

  ngAfterViewInit() {
    this.initializeChart()
  }

  initializeChart() {
    setTimeout(() => {
      let ctx = this.canvas.nativeElement.getContext('2d');
      this.gradient = ctx.createLinearGradient(0, 0, 0, 400);
      this.gradient.addColorStop(0, 'rgba(45,60,52,1)');
      this.gradient.addColorStop(1, 'rgba(45,60,52,0)');
      this.lineChartData.datasets[0]['backgroundColor'] = this.gradient

      this.lineChartData = {
        datasets: [
          {
            data: [1000, 2000, 4000, 3000, 5000, 5500, 7000],
            fill: true,
            tension: 0.5,
            borderColor: '#96e14e',
            backgroundColor: this.gradient,
            pointRadius: 0

          }
        ]
      }
    });
  }
}
