'use strict';

require('./vpoll-player.less');
require('./chart-component');

import vjs from 'video.js';
import io from 'socket.io-client';
import chart from 'chart.js';

window.chart = window.chart || chart;
window.vjs = window.vjs || vjs;
window.videojs = window.videojs || vjs;
window.vPollPlayer = vPollPlayer;

//
window.chartdata = {
    labels: ["Petter","Ashkan"],
    datasets: [
        {
            label: "Vem vinner matchen?",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59]
        }
    ]
};
window.chartoptions = [];
chart.defaults.global.scaleBeginAtZero = true;
chart.defaults.global.scaleSteps = 5;
chart.defaults.global.scaleStepWidth = 20;
chart.defaults.global.scaleStartValue = 0;
chart.defaults.global.scaleOverride = true;
chart.defaults.global.scaleLabel = "<%=value%>%";
//

export default function vPollPlayer(elementId, options) {
  if (!options.socketUrl) throw new Error('options.socketUrl needs to be specified');

  let socket = window.socket = io(options.socketUrl);

  socket.on('message', (msg) => console.log(msg));

  let player = vjs(elementId, options);

  let chartComponent = new vjs.Chart( player, options );
  let chartEl = player.addChild(chartComponent);

  var ctx = document.getElementById("myChart").getContext("2d");
  window.barChart = new chart(ctx).Bar(window.chartdata, window.chartoptions);
	
  return player;
};


