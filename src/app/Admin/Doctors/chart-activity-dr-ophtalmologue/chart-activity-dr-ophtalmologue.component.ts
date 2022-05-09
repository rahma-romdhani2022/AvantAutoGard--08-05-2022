import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-chart-activity-dr-ophtalmologue',
  templateUrl: './chart-activity-dr-ophtalmologue.component.html',
  styleUrls: ['./chart-activity-dr-ophtalmologue.component.css']
})
export class ChartActivityDrOphtalmologueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   var echarts = require('echarts');
    var chartDom1 = document.getElementById('main');
    var myChart = echarts.init(chartDom1);
    var option;
    
    setTimeout(function () {
      option = { 
        textStyle :{
            fontSize :'15', 
          },
          
        legend: {},
        tooltip: {
         
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', 'Janv', 'Fevr', 'Mar', 'Avr', 'Mai', 'Jui'],
            ['Patients', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['Demandes d avis envoyée', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['Walnut Brownie', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['Demandes d avis ont été répondues', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '29%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              color:"#000",
              fontStyle: 'normal',
              fontWeight: 'normal',
              formatter: '{b}: {@Janv} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: 'Janv',
              tooltip: 'Janv'
            }
          }
        ]
      };
      myChart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      myChart.setOption(option);
    });
    
    option && myChart.setOption(option);
   
  }}
