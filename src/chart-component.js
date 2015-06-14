'use strict';

let vjs = require('video.js');

vjs.Chart = vjs.Component.extend({
  init: function(player, options) {
    vjs.Component.call(this, player, options);
  },
  createEl: function(tagName, props) {
    let container = vjs.createEl('div', { className: 'vpoll-chart-component hidden' });
    let title = this.titleEl = vjs.createEl('h3', { className: 'poll-title' });
    let canvas = vjs.createEl('canvas', { className: 'poll-chart', id: 'pollChart' })
    let closeButton = vjs.createEl('div', { className: 'close-thick' });

    closeButton.onclick = () => this.hide();

    container.appendChild(title);
    container.appendChild(canvas);
    container.appendChild(closeButton);

    this.contentEl_ = container;
    return container;
  },
  hide: function() {
    this.addClass('hidden');
  },
  show: function() {
    this.removeClass('hidden');
  },
  setTitle: function(title) {
    this.titleEl.text = title;
  }
});
