'use strict';

let vjs = require('video.js');

vjs.FormPoll = vjs.Component.extend({
  init(player, options) {
    vjs.Component.call(this, player, options);
  },
  createEl(type, props) {
    let overlay = vjs.createEl('div', {
      className: 'vpoll-form-overlay vjs-hidden'
    });

    let formElements = `<fieldset><legend> Question to ask </legend>
      <p><label for="question">Question: </label>
      <input type="text" class="vpoll-form-poll-question" name="question" id="question" value=""></p></fieldset>
      <fieldset><legend> Possible answers </legend>
      <p><label for="alt_1">Alternative 1: </label>
      <input type="text" class="vpoll-form-poll-alt1" name="question" id="alt_1" value=""></p>
      <p><label for="alt_2">Alternative 2: </label>
      <input type="text" class="vpoll-form-poll-alt2" name="question" id="alt_2" value=""></p></fieldset>
      <p><input type="button" class="vpoll-form-poll-submit" value="Submit"></p>`;

    let form = vjs.createEl('form', {
      className: 'vjs-form',
      innerHTML: formElements
    });

    overlay.appendChild(form);

    form.querySelector('.vpoll-form-poll-submit').addEventListener('click', function() {
      let question = form.querySelector('.vpoll-form-poll-question').value;
      let alt1 = form.querySelector('.vpoll-form-poll-alt1').value;
      let alt2 = form.querySelector('.vpoll-form-poll-alt2').value;

      window.sendPoll({ question, alternatives: [alt1, alt2] });
    }, false);

    return overlay;
  }
});

vjs.FormPoll.prototype.options_ = {};
