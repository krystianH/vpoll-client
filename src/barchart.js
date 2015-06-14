'use strict';

import Chart from 'chart.js';

//Initializes an empty bar chart with support for 2 options
export function initChart(chartCmp) {
  let chartData = {
    labels: ["",""],
    datasets: [
      {
        label: "",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [0,0]
      }
    ]
  };

  let chartOptions = Chart.defaults.global;
  chartOptions.scaleBeginAtZero = true;
  chartOptions.scaleSteps = 5;
  chartOptions.scaleStepWidth = 20;
  chartOptions.scaleStartValue = 0;
  chartOptions.scaleOverride = true;
  chartOptions.scaleLabel = "<%=value%>%";
  chartOptions.animationEasing = "easeOutQuart";

  let ctx = chartCmp.el().querySelector('#pollChart').getContext("2d");
  let barChart = new Chart(ctx).Bar(chartData, chartOptions);

  barChart.totalVotes = 0;
  for(let i=0; i<barChart.datasets[0].bars.length; i++) {
    barChart.datasets[0].bars[i].votes = 0;
  }

  return barChart;
}

//Increments votes for an option and updates chart with new percentage values
export function updateChart(chart,chartCmp,data) {
  chart.totalVotes++;
  let options = chart.datasets[0].bars;
  for(let i=0;i<options.length;i++) {
    if ( options[i].id === data.responses.id ) options[i].votes++; 
    chart.datasets[0].bars[i].value = Math.round(options[i].votes*100 / chart.totalVotes);
  }
  chart.update();
}

//Resets chart values and sets title and option text
export function setupChart(chart,chartCmp,data) {
  chart.scale.xLabels = []; //reset bar labels
  for (let i=0;i<data.queries.length;i++) {
    chart.scale.xLabels.push(data.queries[i].text);
    chart.datasets[0].bars[i].value = 0
    chart.datasets[0].bars[i].votes = 0
    chart.datasets[0].bars[i].id = data.queries[i].id;
  }
  chartCmp.setTitle(data.title);
  chart.update();
  setTimeout( () => chartCmp.hide(), 30000); //hide chart after delay
}