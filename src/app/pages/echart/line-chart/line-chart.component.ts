import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';

@Component({
  selector: 'app-line-chart',
  template: `<div
    echarts
    [options]="options"
    class="demo-chart"
    (chartInit)="onChartEvent($event, 'chartInit')"
    (chartClick)="onChartEvent($event, 'chartClick')"
    (chartDblClick)="onChartEvent($event, 'chartDblClick')"
    (chartMouseDown)="onChartEvent($event, 'chartMouseDown')"
    (chartMouseUp)="onChartEvent($event, 'chartMouseUp')"
    (chartMouseOver)="onChartEvent($event, 'chartMouseOver')"
    (chartMouseOut)="onChartEvent($event, 'chartMouseOut')"
    (chartGlobalOut)="onChartEvent($event, 'chartGlobalOut')"
    (chartContextMenu)="onChartEvent($event, 'chartContextMenu')"
    (chartDataZoom)="onChartEvent($event, 'chartDataZoom')"
  ></div> `,
})
export class LineChartComponent implements OnInit {
  options: any;

  constructor() {}

  ngOnInit(): void {
    const dataAxis = [
      { value: '10%' },
      { value: '20%' },
      { value: '30%' },
      { value: '40%' },
      { value: '50%' },
      { value: '60%' },
      { value: '70%' },
      { value: '80%' },
      { value: '90%' },
      { value: '100%' },
    ].map((res: any) => {
      res.textStyle = { color: '#888' };
      return res;
    });
    const data = [
      { value: 50 },
      { value: 45 },
      { value: 40 },
      { value: 35 },
      { value: 30 },
      { value: 25 },
      { value: 20 },
      { value: 15 },
      { value: 10 },
      { value: 5 },
    ].map((res: any) => {
      if (res.value === 10) {
        const meStyle = {
          normal: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#0b74e2' },
              { offset: 0.5, color: '#33a0ff' },
            ]),
          },
        };
        res.itemStyle = meStyle;
      }
      return res;
    });

    this.options = {
      // title: {
      //   text: 'Check Console for Events',
      // },
      xAxis: {
        data: dataAxis,
        name: '상위',
        nameLocation: 'start',
        nameTextStyle: {
          padding: [65, -40, 0, 0],
        },
        axisLabel: { interval: 0 },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
        },
        z: 10,
      },
      yAxis: {
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          textStyle: {
            // color: '#999',
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: '#9fafbf',
          },
          data,
          name: 'aaa',
        },
      ],
    };
  }

  onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
  }
}
