'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let late = s.includes('PM')
    if(!late){
        s = s.split('AM')
        s = s[0].split(':')
        if(s[0] == '12') s[0] = '00'
        return s.join(':')
    }
    else{
        s = s.split('PM')
        s = s[0].split(':')
        if(s[0] != '12') s[0] = (parseInt(s[0]) + 12).toString()
        return s.join(':')
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
