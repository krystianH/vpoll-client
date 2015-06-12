'use strict';

let chart = require('chart.js');

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

let chartOptions = chart.defaults.global;
chartOptions.scaleBeginAtZero = true;
chartOptions.scaleSteps = 5;
chartOptions.scaleStepWidth = 20;
chartOptions.scaleStartValue = 0;
chartOptions.scaleOverride = true;
chartOptions.scaleLabel = "<%=value%>%";

var ctx = document.getElementById("pollChart").getContext("2d");
export default new chart(ctx).Bar(chartData, chartOptions);
