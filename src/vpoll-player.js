'use strict';

require('./vpoll-player.less');
require('./chart-component');
require('./form-poll-component');

import vjs from 'video.js';
import hls from 'videojs-contrib-hls';
import io from 'socket.io-client';
import chart from 'chart.js';

import 'videojs-contrib-media-sources';
import 'videojs-contrib-hls';

window.vPollPlayer = vPollPlayer;

export default function vPollPlayer(elementId, options) {
  if (!options.socketUrl) throw new Error('options.socketUrl needs to be specified');

  let socket = window.socket = io(options.socketUrl);

  socket.on('message', (msg) => console.log(msg));

  let player = vjs(elementId, options);

  let chartComponent = new vjs.Chart(player, {});
  let chartEl = player.addChild(chartComponent);

  let pollComponent = new vjs.FormPoll(player, {});
  let pollEl = player.addChild(pollComponent);

  return player;
};

// Poll form calls on this function onSubmit
window.sendPoll = function() {
  console.log('No logic for sending implemented .... hiding poll');
  document.getElementById('vjs-form-overlay').className = 'hide-el';
}

// Called in order to display the poll form
window.askPoll = function() {
  console.log('Showing poll form');
  document.getElementById('vjs-form-overlay').className = 'show-el';
}
