'use strict';

require('./vpoll-player.less');
require('./chart-component');
require('./form-poll-component');

import vjs from 'video.js';
import hls from 'videojs-contrib-hls';
import io from 'socket.io-client';
import {initChart, updateChart, setupChart, getSampleCreate, getSampleUpdate} from './barchart';

import 'videojs-contrib-media-sources';
import 'videojs-contrib-hls';

window.vPollPlayer = vPollPlayer;

export default function vPollPlayer(elementId, options) {
  if (!options.socketUrl) throw new Error('options.socketUrl needs to be specified');

  let player = vjs(elementId, options);

  let chartComponent = new vjs.Chart(player, {});
  player.addChild(chartComponent);

  let pollComponent = new vjs.FormPoll(player, {});
  player.addChild(pollComponent);

  let barChart = window.barChart = initChart(chartComponent);;

  let socket = window.socket = io(options.socketUrl);

  socket.on('message', (msg) => {
    console.log(msg);
    if (msg.type === 'respPoll') {
    	updateChart(barChart,chartComponent,msg);
    	chartComponent.show();
    }
    else if (msg.type === 'createPoll') {
    	setupChart(barChart,chartComponent,msg);
    }
  });
 
  require('./chart-test')(barChart,chartComponent); //for chart testing

  // Poll form calls on this function onSubmit
  window.sendPoll = function() {
    console.log('No logic for sending implemented .... hiding poll');
    pollComponent.addClass('vjs-hidden');
  };

  // Called in order to display the poll form
  window.askPoll = function() {
    console.log('Showing poll form');
    pollComponent.removeClass('vjs-hidden');
  };

  return player;
};
