'use strict';

const Iroh = require('iroh');

module.exports = function run_test() {
    // perfect squares
    const code = `
      for (let i = 0; i < 10; i++) {
          let n = i * i;
      };
  `;

    const stage = new Iroh.Stage(code);

    stage.addListener(Iroh.VAR).on('after', (e) => {
        console.log(' '.repeat(e.indent), e.name, '=', e.value);
    });

    stage.addListener(Iroh.LOOP).on('enter', (e) => {
        console.log(`${' '.repeat(e.indent)}entered loop`);
    }).on('leave', (e) => {
        console.log(`${' '.repeat(e.indent)}exited loop`);
    });

    // eslint-disable-next-line no-eval
    eval(stage.script);
};
