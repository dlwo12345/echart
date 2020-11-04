import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';

@Component({
  selector: 'app-gauge-chart',
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
export class GaugeChartComponent implements OnInit {
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.options = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          data: [{ value: 0 }],
          detail: { formatter: '{value}%', color: '#fff' },
          splitLine: { show: false },
          splitNumber: 1,
          axisLabel: {
            formatter: '{value} kW',
            color: 'rgba(255,255,255,0.5)',
            padding: [25, 0, 0, 0],
            fontSize: 12,
          },
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              width: 90,
              color: [
                [
                  0,
                  new graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#00acff' },
                    { offset: 1, color: '#00ffb7' },
                  ]),
                ],
                [1, 'rgba(0,0,0,0.2)'],
              ],
            },
          },
          pointer: { length: '30%', width: 3 },
          animation: false,
        },
      ],
    };
    setTimeout(() => {
      this.startAnimation();
    }, 100);
  }

  startAnimation(i = 0) {
    const newOption = { ...this.options };

    if (i <= 100) {
      newOption.series[0].axisLine.lineStyle.color[0][0] = i / 100;
      newOption.series[0].data[0].value = i;
      setTimeout(() => {
        this.options = newOption;
        this.startAnimation(i + 1);
      }, 5);
    }

    return;
  }

  onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
  }
}
