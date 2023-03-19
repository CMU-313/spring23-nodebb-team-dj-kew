'use strict';

/* eslint-disable */
const Iroh = require('iroh');

module.exports = function run_test() {
  // perfect squares
  let code = `
      for (let i = 0; i < 10; i++) {
          let n = i * i;
      };
  `;

  let stage = new Iroh.Stage(code);

  stage.addListener(Iroh.VAR).on('after', function(e) {
    console.log(' '.repeat(e.indent), e.name, '=', e.value);
  })

  stage.addListener(Iroh.LOOP).on('enter', function(e) {
    console.log(' '.repeat(e.indent) + 'entered loop');
  }).on('leave', function(e) {
    console.log(' '.repeat(e.indent) + 'exited loop');
  });

  eval(stage.script);
}
