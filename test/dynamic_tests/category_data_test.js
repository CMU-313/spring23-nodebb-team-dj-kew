'use strict';

const Iroh = require('iroh');
const assert = require('assert');
var fs = require('fs'),
path = require('path'),
filePath = path.join(path.dirname(path.dirname(__dirname)), 'src', 'utils.js');

module.exports = function run_test() {
    console.log(filePath)
    let content = fs.readFileSync(filePath, {encoding: 'utf-8'});
    content = content.replace("{ ...require('../public/src/utils.common') };", "require('../../public/src/utils.common')");
    let injected = `
        process.elapsedTimeSince([0, 0]);
    `
    const stage = Iroh.Stage(content + injected);
    stage.addListener(Iroh.VAR).on('after', function(e) {
        if (e.name == "diff") {
            assert(e.value[0] > 0 && e.value[1] > 0);
        }
        console.log(' '.repeat(e.indent), e.name, '=', e.value)
    });

    // if, else if
    stage.addListener(Iroh.IF)
    .on("enter", function(e) {
        // we enter the if
        console.log(" ".repeat(e.indent) + "if enter");
    })
    .on("leave", function(e) {
        // we leave the if
        console.log(" ".repeat(e.indent) + "if leave");
    });

    stage.addListener(Iroh.LOOP).on('enter', function(e) {
        console.log(' '.repeat(e.indent) + 'entered loop')
    }).on('leave', function(e) {
        console.log(' '.repeat(e.indent) + 'exited loop')
    })

    stage.addListener(Iroh.FUNCTION).on('return', function(e) {
        console.log("returned from " + e.name + " with value: " + e.return);
    })

    eval(stage.script);
};
