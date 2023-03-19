'use strict';

const Iroh = require('iroh');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(path.dirname(__dirname)), 'src', 'utils.js');

module.exports = function run_test() {
    console.log(filePath);
    let content = fs.readFileSync(filePath, { encoding: 'utf-8' });
    content = content.replace("{ ...require('../public/src/utils.common') };", "require('../../public/src/utils.common')");
    const injected = `
        process.elapsedTimeSince([0, 0]);
    `;
    const stage = Iroh.Stage(content + injected);
    stage.addListener(Iroh.VAR).on('after', (e) => {
        if (e.name === 'diff') {
            assert(e.value[0] > 0 && e.value[1] > 0);
        }
        console.log(' '.repeat(e.indent), e.name, '=', e.value);
    });

    // if, else if
    stage.addListener(Iroh.IF)
        .on('enter', (e) => {
        // we enter the if
            console.log(`${' '.repeat(e.indent)}if enter`);
        })
        .on('leave', (e) => {
        // we leave the if
            console.log(`${' '.repeat(e.indent)}if leave`);
        });

    stage.addListener(Iroh.LOOP).on('enter', (e) => {
        console.log(`${' '.repeat(e.indent)}entered loop`);
    }).on('leave', (e) => {
        console.log(`${' '.repeat(e.indent)}exited loop`);
    });

    stage.addListener(Iroh.FUNCTION).on('return', (e) => {
        console.log(`returned from ${e.name} with value: ${e.return}`);
    });

    // eslint-disable-next-line no-eval
    eval(stage.script);
};
