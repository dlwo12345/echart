import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  template: `
    <div echarts [options]="options" class="demo-chart"></div>
    <button (click)="changeLabel()">changeLabel</button>
    <button (click)="changeData()">changeData</button>
  `,
})
export class PieChartComponent implements OnInit {
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}% ({c}) ',
      },
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          label: {
            position: 'inside',
            formatter: '{b}\n{d}%',
            fontSize: 10,
            color: '#fff',
          },
          data: [
            // { value: 100, itemStyle: { color: 'rgba(80, 80, 80, 0.5)' } }, // 데이터없을때 케이스
            { value: 154, name: '원리금', itemStyle: { color: '#6ea6e1' } },
            { value: 535, name: '세금', itemStyle: { color: '#458fdc' } },
            { value: 510, name: '공과금', itemStyle: { color: '#175ca5' } },
            { value: 634, name: '운영비', itemStyle: { color: '#05407e' } },
            { value: 735, name: '기타', itemStyle: { color: '#0f3256' } },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }

  changeLabel() {
    const newOption = { ...this.options };

    newOption.series[0].label.position =
      newOption.series[0].label.position === 'inside' ? 'outside' : 'inside';

    newOption.series[0].label.color =
      newOption.series[0].label.position === 'inside' ? '#fff' : 'auto';

    this.options = newOption;
  }

  changeData() {
    const newOption = { ...this.options };

    const nullDataOption = [
      {
        value: 100,
        itemStyle: { color: 'rgba(80, 80, 80, 0.5)' },
      },
    ];
    const originalDataOption = [
      { value: 154, name: '원리금', itemStyle: { color: '#6ea6e1' } },
      { value: 535, name: '세금', itemStyle: { color: '#458fdc' } },
      { value: 510, name: '공과금', itemStyle: { color: '#175ca5' } },
      { value: 634, name: '운영비', itemStyle: { color: '#05407e' } },
      { value: 735, name: '기타', itemStyle: { color: '#0f3256' } },
    ];

    newOption.series[0].data =
      newOption.series[0].data.length === 1
        ? originalDataOption
        : nullDataOption;

    this.options = newOption;
  }
}
