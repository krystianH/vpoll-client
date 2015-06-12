'use strict';

require('./vpoll-player.less');
require('./chart-component');
require('./form-poll-component');

import vjs from 'video.js';
import hls from 'videojs-contrib-hls';
import io from 'socket.io-client';
import chart from 'chart.js';
import uuid from 'node-uuid';
import barChart from './barchart';

import 'videojs-contrib-media-sources';
import 'videojs-contrib-hls';

window.vPollPlayer = vPollPlayer;

export default function vPollPlayer(elementId, options) {
  if (!options.socketUrl) throw new Error('options.socketUrl needs to be specified');

  let player = vjs(elementId, options);
  let clientID = uuid.v4(); // TODO: this should be persisted and reused in localStorage or similar

  let socket = window.socket = io(options.socketUrl);

  socket.on('message', (msg) => {
    console.log(msg);
    if (msg.type === 'respPoll') {
      //update poll
    }
  });

  let chartComponent = new vjs.Chart(player, {});
  player.addChild(chartComponent);

  let pollComponent = new vjs.FormPoll(player, {});
  player.addChild(pollComponent);

  barChart(chartComponent);

  // Poll form calls on this function onSubmit
  window.sendPoll = function({ question, alternatives }) {
    socket.emit('message', {
      clientID: clientID,
      messageID: uuid.v4(),
      pollId: uuid.v4(),
      type: 'createPoll',
      startTime: null,
      stopTime: null,
      title: question,
      queries: [{
        id: '1',
        text: alternatives[0],
        type: 'button'
      }, {
        id: '2',
        text: alternatives[1],
        type: 'button'
      }]
    });

    pollComponent.addClass('vjs-hidden');
  };

  // Called in order to display the poll form
  window.askPoll = function() {
    console.log('Showing poll form');
    pollComponent.removeClass('vjs-hidden');
  };

  return player;
};
