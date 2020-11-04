import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echart',
  template: `
    <style>
      .nav {
        height: 100px;
      }
      .nav:after {
        content: '';
        display: block;
        clear: both;
      }
      .nav li {
        float: left;
        display: inline-block;
        margin: 5px;
      }
    </style>
    <ul class="nav" style="height:100px;">
      <li>
        <button routerLink="sample">sample</button>
      </li>
      <li>
        <button routerLink="line-chart">line-chart</button>
      </li>
      <li>
        <button routerLink="linebar-chart">linebar-chart</button>
      </li>
      <li>
        <button routerLink="pie-chart">pie-chart</button>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class EchartComponent {
  constructor() {}
}
