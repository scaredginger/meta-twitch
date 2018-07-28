const fetch = require('node-fetch');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'meta',
  password : process.env.META_PASSWORD,
  database : 'meta'
});

connection.connect();

const timeBatch = [];
const streamBatch = {};
const channelBatch = {};
const followerCountBatch = [];

const awaiting = {};
const inserted = {};

function getData(url='https://api.twitch.tv/kraken/streams?limit=100&offset=0') {
  fetch(url, {
    headers: {
        "Client-ID": '0c49vemqyzwjwrjcyl7vygqmuj51j0'
    },
    redirect: "follow", // manual, *follow, error
  })
    .then(res => res.json())
    .then(handleFrame);
}

function handleFrame(frame) {
  for (let stream of frame.streams) {
    const time = new Date();
    timeBatch.push(Object.assign({ time }, stream));
    streamBatch[stream._id] = Object.assign({ time }, stream);
    channelBatch[stream.channel._id] = Object.assign({ time }, stream.channel);
  }
  if (frame.streams.length >= 99) {
    setTimeout(() => { getData(frame._links.next) }, 500);
  } else {
    setTimeout(() => { getData() }, 500);
  }
}

function convertTimes(timeBatch) {
  return timeBatch.map((moment) => (
    [moment.time, moment._id, moment.viewers]
  ));
}

function convertStreams(streamBatch) {
  const k = Object.keys(streamBatch).map((key) => [
    streamBatch[key]._id,
    streamBatch[key].channel._id,
    streamBatch[key].channel.status,
    streamBatch[key].created_at,
    streamBatch[key].game,
  ]);
  for (let key in streamBatch) {
    delete(streamBatch[key]);
  }
  return k;
}

function convertChannels(channelBatch) {
  const k = Object.keys(channelBatch).map((key) => [
    channelBatch[key]._id,
    channelBatch[key].display_name,
    channelBatch[key].name,
    channelBatch[key].profile_banner,
    channelBatch[key].logo,
    channelBatch[key].created_at,
    channelBatch[key].updated_at,
  ]);
  for (let key in channelBatch) {
    delete(channelBatch[key]);
  }
  return k;
}

function convertFollowerCounts(followerCountBatch) {
  return followerCountBatch.map((channel) => [
    channelBatch[key]._id,
    channelBatch[key].time,
    channelBatch[key].followers,
  ]);
}

function insertFollowers() {
  if (followerCountBatch.length === 0) {
    return;
  }
  const followers = followerCountBatch.splice(0, followerCountBatch.length);
  connection.query('INSERT IGNORE INTO followerCount(channelID, time, followers) VALUES ?', [convertFollowerCounts(followers)], (error) => {
    if (error) {
      console.error(error);
    }
  });
}

function insertTimes() {
  if (timeBatch.length === 0) {
    return;
  }
  const times = timeBatch.splice(0, timeBatch.length);
  connection.query('INSERT IGNORE INTO streamMoments (time, streamID, viewers) VALUES ?', [convertTimes(times)], (error) => {
    if (error) {
      console.error(error);
    }
  });
}

function insertStreams() {
  const k = convertStreams(streamBatch);
  if (k.length === 0) {
    return;
  }
  connection.query('INSERT IGNORE INTO streams (id, channelID, description, createdAt, game) VALUES ?', [k], (error) => {
    if (error) {
      console.error(error);
    }
  });
}

function insertChannels() {
  const k = convertChannels(channelBatch);
  if (k.length === 0) {
    return;
  }
  connection.query('INSERT IGNORE INTO channels (id, displayName, name, banner, logo, createdAt, updatedAt) VALUES ?', [k], (error) => {
    if (error) {
      console.error(error);
    }
  });
}

getData();
setInterval(insertTimes, 5000);
setInterval(insertStreams, 59 * 1000);
setInterval(insertChannels, 61 * 1000);
setInterval(insertFollowers, 53 * 1000);
