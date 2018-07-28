const json = require('./simulation.json')
const fs = require('fs');
let k = fs.readFileSync('./logo.tsv').toString();

k = k.split('\n');
logos = {};
for (let line of k) {
	let [a, , b] = line = line.split('\t');
	logos[a] = b;
}
json.logos = {};
for (let key in json.twitch) {
	json.logos[key] = logos[key];
}
console.log(JSON.stringify(json));
