'use strict';

let vjs = require('video.js');

vjs.Chart = vjs.Component.extend({
  init: function(player, options) {
    vjs.Component.call(this, player, options);
  },
  createEl: function(tagName, props) {
    let container = vjs.createEl('div', { className: 'vjs-chart-component hidden' });
    let title = vjs.createEl('h3', { className: 'poll-title' });
    let canvas = vjs.createEl('canvas', { className: 'poll-chart', id: 'pollChart' })
    let closeButton = vjs.createEl('div', { className: 'close-thick' });

    closeButton.onclick = () => container.className += " hidden";

    container.appendChild(title);
    container.appendChild(canvas);
    container.appendChild(closeButton);

    this.contentEl_ = container;
    return container;
  }
});
