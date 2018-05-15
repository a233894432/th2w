#! /usr/bin/env node
"use strict";

const program = require("commander");


main();

function main() {
    //   if (process.argv[2] !== "lint" && process.argv[2] !== "bug") await beforeInit();
    // 注入  Command 参数
    program
        .version('0.0.1', '-v, --version')
        .usage("<command> [options]")
        .parse(process.argv);
}