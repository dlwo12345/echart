import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';

@Component({
  selector: 'app-linebar-chart',
  template: `
    <div
      style="background-image: linear-gradient(to bottom, #0b74e2 0%, #0051a6 98%);"
    >
      <div
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
      ></div>
    </div>
  `,
})
export class LineBarChartComponent implements OnInit {
  options: any;

  constructor() {}

  ngOnInit(): void {
    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
      },
      legend: {
        data: ['kwh', '발전시간'],
        textStyle: {
          color: 'rgba(255,255,255,0.5)',
          fontSize: 10
        },
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
          ],
          axisPointer: {
            type: 'shadow',
          },
          axisLabel: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 10,
          },
          axisLine: {
            show: true,
            lineStyle: { color: 'rgba(255,255,255,0.1)' },
          },

          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'kwh',
          nameTextStyle: {
            color: 'rgba(255,255,255,0.5)',
          },
          min: 0,
          axisLabel: {
            formatter: '{value}',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 10,
          },
          splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: 'value',
          name: '발전시간',
          nameTextStyle: {
            color: 'rgba(255,255,255,0.5)',
          },
          axisLabel: {
            formatter: '{value}',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 10,
          },
          splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          // splitLine: { show: false },
        },
      ],
      series: [
        {
          name: 'kwh',
          type: 'bar',
          data: [6363.2, 9150.1, 13754.6],
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(255,255,255,0.6)' },
              { offset: 1, color: 'rgba(255,255,255,0.1)' },
            ]),
          },
        },
        {
          name: '발전시간',
          type: 'line',
          yAxisIndex: 1,
          showSymbol: false,
          symbolSize: 0,
          itemStyle: { color: '#fff' },
          lineStyle: { color: '#fff' },
          data: [2.1, 3.22, 4.53],
        },
      ],
    };
  }

  onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
  }
}
