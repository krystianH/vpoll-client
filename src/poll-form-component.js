'use strict';

let vjs = require('video.js');

vjs.FormPoll = vjs.Component.extend({
  init: function(player, options) {
    vjs.Component.call( this, player, options);
  },
  buildCSSClass: function() {
    return 'vjs-poll-form' + vjs.Button.prototype.buildCSSClass.call(this);
  },
  createEl: function(type, props) {
    let overlay = videojs.createEl('div', {
      className: 'hide-el',
      id: 'vjs-form-overlay'
    });

    let formElements = `<fieldset><legend> Question to ask </legend>
      <p><label for="question">Question: </label>
      <input type="text" name="question" id="question" value=""></p></fieldset>
      <fieldset><legend> Possible answers </legend>
      <p><label for="alt_1">Alternative 1: </label>
      <input type="text" name="question" id="alt_1" value=""></p>
      <p><label for="alt_2">Alternative 2: </label>
      <input type="text" name="question" id="alt_2" value=""></p></fieldset>
      <p><input type="button" value="Submit" onClick="sendPoll()"></p>`;

    let form = videojs.createEl('form', {
      className: 'vjs-form',
      innerHTML: formElements
    });

    overlay.appendChild(form);

    return overlay;
  };
});

vjs.formPoll.prototype.options_ = {};
